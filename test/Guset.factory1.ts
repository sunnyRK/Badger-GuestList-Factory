import {
	expect
} from 'chai';
import {
	ethers,
	waffle
} from 'hardhat';
import {
	BigNumber
} from '@ethersproject/bignumber';
import {
	JsonRpcProvider
} from '@ethersproject/providers';
import TestVipCappedGuestListBbtcUpgradeableAbi from "../artifacts/contracts/TestVipCappedGuestListBbtcUpgradeable.sol/TestVipCappedGuestListBbtcUpgradeable.json";
import {
  GuestProxyFactory,
  TestVipCappedGuestListBbtcUpgradeable,
  PriceOracle,
  MockVault
  
} from '../types';
import { Signer } from 'ethers';
import { parseEther } from 'ethers/lib/utils';

describe('GenericProxyFactory', () => {
  let contractsOwner: Signer;
  let _contractsOwner: any;
	let _yieldSourceOwner: any;
	let _wallet2: any;
	let provider: JsonRpcProvider;
	let maxValue: any
  let guest: TestVipCappedGuestListBbtcUpgradeable
  let priceOracle: PriceOracle
  let mockVault: MockVault

  maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
  provider = waffle.provider;
  let chainId = '250'; 
  let merkleRoot: any = "0x1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a"
  let userCap: any = parseEther('2')
  let totalCap: any = parseEther('50')
  let SOLIDLY_ROUTER = "0xa38cd27185a464914D3046f0AB9d43356B34829D";
  let SPOOKY_ROUTER = "0xF491e7B69E4244ad4002BC14e878a34207E38c29";
  let CURVE_ROUTER = "0x74E25054e98fd3FCd4bbB13A962B43E49098586f";
  let USDC = "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"; // USDC ERC20 token on Fantom
  let SOLID =  "0x888EF71766ca594DED1F0FA3AE64eD2941740A20"; // Solid ERC20 token on Fantom 

  beforeEach(async() => {
    [_contractsOwner, _yieldSourceOwner, _wallet2] = await ethers.getSigners();
    contractsOwner = await ethers.getSigner(_contractsOwner.address);
  })

  describe('PriceOracle', async() => {
    before(async() => {
      const priceOracleFactory = await ethers.getContractFactory('PriceOracle');
      priceOracle = await priceOracleFactory.deploy(
        chainId,
        SPOOKY_ROUTER,
        SOLIDLY_ROUTER,
        CURVE_ROUTER
      ) as PriceOracle
    })

    it('getUniV2Quote', async() => {
      const spookyRouter = await priceOracle.getUniV2Quote(chainId)
      expect(spookyRouter).to.eq(SPOOKY_ROUTER)
    })

    it('getSolidlyQuote', async() => {
      const solidlyRouter = await priceOracle.getSolidlyQuote(chainId)
      expect(solidlyRouter).to.eq(SOLIDLY_ROUTER)
    })

    it('getCurveQuote', async() => {
      const curveRouter = await priceOracle.getCurveQuote(chainId)
      expect(curveRouter).to.eq(CURVE_ROUTER)
    })

    it('should get valid want amount', async() => {
      const wantAmount = await priceOracle.findOptimalSwap(
        USDC,
        SOLID,
        totalCap,
        chainId
      )
      expect(wantAmount[1]).to.gt(0)
    })
  })

  describe('MockVault', async() => {
    it('Should valid token in vault', async() => {
        const mockVaultFactory = await ethers.getContractFactory('MockVault');
        mockVault = await mockVaultFactory.deploy() as MockVault
        await mockVault.setToken(SOLID);
        const token = await mockVault.token()
        expect(token).to.eq(SOLID)
    })
  })

  describe("GuestProxyFactory using ClonesUpgradeable from OpenZeppelin", async() => {

    let proxyCreatedEvent: any
    before('Should create Guest using Guest factory using OZ clones', async() => {

      const priceOracleFactory = await ethers.getContractFactory('PriceOracle');
      priceOracle = await priceOracleFactory.deploy(
        chainId,
        SPOOKY_ROUTER,
        SOLIDLY_ROUTER,
        CURVE_ROUTER
      ) as PriceOracle

      const mockVaultFactory = await ethers.getContractFactory('MockVault');
      mockVault = await mockVaultFactory.deploy() as MockVault
      await mockVault.setToken(SOLID);
      const token = await mockVault.token()
      expect(token).to.eq(SOLID)

      // GenericProxyFactory is using ClonesUpgradeable from OpenZeppelin
      const genericProxyFactoryContract = await ethers.getContractFactory('GenericProxyFactory');
      const hardhatGenericProxyFactory = await genericProxyFactoryContract.deploy();

      const GuestProxyFactory = await ethers.getContractFactory('GuestProxyFactory');
      const hardhatGuestProxyFactory = (await GuestProxyFactory.deploy(
        hardhatGenericProxyFactory.address,
        priceOracle.address
      ) as unknown) as GuestProxyFactory;

      // deploy TestVipCappedGuestListBbtcUpgradeable using `createNewProxy` function and perform all tx in single tx
      const initializeTx = await hardhatGuestProxyFactory.createNewProxy(
        mockVault.address,
        USDC,
        _yieldSourceOwner.address,
        userCap,
        totalCap,
        chainId,
        merkleRoot
      );
      const receipt = await provider.getTransactionReceipt(initializeTx.hash);
      proxyCreatedEvent = hardhatGenericProxyFactory.interface.parseLog(
        receipt.logs[0],
      );
      expect(proxyCreatedEvent.name).to.equal('ProxyCreated');
    
      guest = (await ethers.getContractAt(
        TestVipCappedGuestListBbtcUpgradeableAbi.abi,
        proxyCreatedEvent.args[0],
        contractsOwner,
      ) as unknown) as TestVipCappedGuestListBbtcUpgradeable;
    })

    it ('new guest address should match', async() => {
      expect(guest.address).to.eq(proxyCreatedEvent.args[0])
    })

    it ('should match vault/wrapper address', async() => {
      const wrapper = await guest.wrapper();
      expect(wrapper).to.eq(mockVault.address)
    })

    it ('should match owner address', async() => {
      const owner = await guest.owner();
      expect(owner).to.eq(_yieldSourceOwner.address)
    })

    it ('should match userDepositCap', async() => {
      const userDepositCap = await guest.userDepositCap();
      expect(userDepositCap).to.eq(userCap)
    })

    it ('should match totalDepositCap', async() => {
      const wantAmount = await priceOracle.findOptimalSwap(
        USDC,
        SOLID,
        totalCap,
        chainId
      )
      const totalDepositCap = await guest.totalDepositCap();
      expect(totalDepositCap).to.eq(wantAmount[1])
    })

    it ('should match guestRoot', async() => {
      const guestRoot = await guest.guestRoot();
      expect(guestRoot).to.eq(merkleRoot)
    })
  })
})