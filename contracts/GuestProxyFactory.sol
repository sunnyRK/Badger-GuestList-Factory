// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TestVipCappedGuestListBbtcUpgradeable.sol";
import "./interfaces/IGenericProxyFactory.sol";
import "./interfaces/oracle/IPriceOracle.sol";
import "./interfaces/mock/IVault.sol";
import "hardhat/console.sol";

contract GuestProxyFactory {
    
    /// @notice Guestlist Contract
    TestVipCappedGuestListBbtcUpgradeable public instance;

    /// @notice GenericProxyFactory Contract with OZ ClonesUpgradable
    IGenericProxyFactory public iGenericProxyFactory;

    /// @notice PriceOracle Contract => single oracle will manage different price calculations
    IPriceOracle public iPriceOracle;


    /**
     * @notice constructor of Guestlist factory contract
     * @param _iGenericProxyFactory it is used to clone the guestList, underthehood it is using OZ ClonesUpgradable
     * @param _iPriceOracle single oracle will manage different price calculations
     */
    constructor(
        address _iGenericProxyFactory,
        address _iPriceOracle
    ) {
        instance = new TestVipCappedGuestListBbtcUpgradeable();
        iGenericProxyFactory = IGenericProxyFactory(_iGenericProxyFactory);
        iPriceOracle = IPriceOracle(_iPriceOracle);
    }
    
    /**
     * @notice createNewProxy will create clone of TestVipCappedGuestListBbtcUpgradeable or guestlist
     * @param _wrapper is the vault it is used by guestlist
     * @param _usdc stablecoin address, it is use for calculate the price of want token
     * @param _newOwner of the guestlist
     * @param _userDepositCap used can only deposit upto this cap
     * @param _totalDepositCap total deposit can be upto this cap
     * @param _guestRoot merkle root to verify invitation proofs 
     * @param _isLPToken if the price should be calculate for lp token or not
     * @return instanceCreated new address of instance created of guestlist 
     */
    function createNewProxy(
        address _wrapper,
        address _usdc,
        address _newOwner,
        uint256 _userDepositCap,
        uint256 _totalDepositCap,
        bytes32 _guestRoot,
        bool _isLPToken
    ) public returns (address instanceCreated, bytes memory result) {
            (instanceCreated, result)= iGenericProxyFactory.create(address(instance), '' );
            TestVipCappedGuestListBbtcUpgradeable guest = TestVipCappedGuestListBbtcUpgradeable(instanceCreated);
            address want = IVault(_wrapper).token();
            uint256 wantAmount;
            if (_isLPToken) {
                // if the want token address is lp token address then it will calculate 
                // the price of lpAmount(_totalDepositCap) in usd
                wantAmount = iPriceOracle.getUnderlyingPrice(want, _totalDepositCap);
            } else {
                // if the want token address is erc20 token address then it will calculate 
                // the price of usd(_totalDepositCap) in erc20 quantity
                (, wantAmount) = iPriceOracle.getBestQuoteFromOracleAggregator(_usdc, want, _totalDepositCap);
            }
            guest.initialize(_wrapper);
            guest.setUserDepositCap(_userDepositCap);
            guest.setTotalDepositCap(wantAmount);
            guest.setGuestRoot(_guestRoot);
            guest.transferOwnership(_newOwner);
    }
}
