// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TestVipCappedGuestListBbtcUpgradeable.sol";
import "./interfaces/IGenericProxyFactory.sol";
import "./interfaces/oracle/IPriceOracle.sol";
import "./interfaces/mock/IVault.sol";
import "hardhat/console.sol";

contract GuestProxyFactory {
    
    TestVipCappedGuestListBbtcUpgradeable public instance;
    IGenericProxyFactory public iGenericProxyFactory;
    IPriceOracle public iPriceOracle;

    constructor(
        address _iGenericProxyFactory,
        address _iPriceOracle
    ) {
        instance = new TestVipCappedGuestListBbtcUpgradeable();
        iGenericProxyFactory = IGenericProxyFactory(_iGenericProxyFactory);
        iPriceOracle = IPriceOracle(_iPriceOracle);
    }
    
    function createNewProxy(
        address _wrapper,
        address _usdc,
        address _newOwner,
        uint256 _userDepositCap,
        uint256 _totalDepositCap,
        bytes32 _guestRoot,
        bool isLPToken
    ) public returns (address instanceCreated, bytes memory result) {
            (instanceCreated, result)= iGenericProxyFactory.create(address(instance), '' );
            TestVipCappedGuestListBbtcUpgradeable guest = TestVipCappedGuestListBbtcUpgradeable(instanceCreated);
            address want = IVault(_wrapper).token();
            uint256 wantAmount;
            if (isLPToken) {
                wantAmount = iPriceOracle.getUnderlyingPrice(want, _totalDepositCap);
                console.log('wantAmount', wantAmount);
            } else {
                (, wantAmount) = iPriceOracle.findOptimalSwap(_usdc, want, _totalDepositCap);
            }
            guest.initialize(_wrapper);
            guest.setUserDepositCap(_userDepositCap);
            guest.setTotalDepositCap(wantAmount);
            guest.setGuestRoot(_guestRoot);
            guest.transferOwnership(_newOwner);
    }
}
