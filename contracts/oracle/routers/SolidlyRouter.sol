// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/oracle/IBaseV1Router01.sol";
import "hardhat/console.sol";

contract SolidlyRouter {

    mapping(uint256 => address) public solidlyRouters;
    mapping(address => bool) public isRouterWorking;
    address public governance;
    string public solidlyString = 'solidily';

    constructor(address _solidlyRouter) public {
        governance = msg.sender;
        uint256 chainId = getChainID();
        solidlyRouters[chainId] = _solidlyRouter;
        isRouterWorking[_solidlyRouter] = true;
    }

    function setGovernance(address _newGovernance) public {
        require(governance == msg.sender, "Only set by current governance");
        governance = _newGovernance;
    }

    function setRoutersForSpecificChainId(
        uint256 _chainId, 
        address _solidlyRouter,
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        solidlyRouters[_chainId] = _solidlyRouter;
        isRouterWorking[_solidlyRouter] = _isRouterWorking;
    }

    function getChainID() public view returns (uint256) {
        uint256 id;
        assembly {
            id := chainid()
        }
        return id;
    }

    function getRouter() public view returns(address) {
        uint256 chainId = getChainID();
        return solidlyRouters[chainId];
    }

    function getQuote(
        bytes memory data
    ) external view returns (uint256 solidlyQuote, string memory _solidly) {
        uint256 chainId = getChainID();
        address _solidlyRouter = solidlyRouters[chainId];
        require(isRouterWorking[_solidlyRouter] == true, "Router is not available to quote.");
        (
            uint256 amountIn,
            address tokenIn,
            address tokenOut
        ) = abi.decode(data, (uint256, address, address));
        (uint256 solidlyQuote,) = IBaseV1Router01(_solidlyRouter).getAmountOut(amountIn, tokenIn, tokenOut);
        _solidly = solidlyString;
    }
}
