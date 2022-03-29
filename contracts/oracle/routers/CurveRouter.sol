// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/oracle/ICurveRouter.sol";
import "hardhat/console.sol";

contract CurveRouter {

    mapping(uint256 => address) public curveRouters;
    mapping(address => bool) public isRouterWorking;
    address public governance;
    string public curveString = 'curve';

    constructor(address _curveRouter) public {
        governance = msg.sender;
        uint256 chainId = getChainID();
        curveRouters[chainId] = _curveRouter;
        isRouterWorking[_curveRouter] = true;
    }

    function setGovernance(address _newGovernance) public {
        require(governance == msg.sender, "Only set by current governance");
        governance = _newGovernance;
    }

    function setRoutersForSpecificChainId(
        uint256 _chainId, 
        address _curveRouter,
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        curveRouters[_chainId] = _curveRouter;
        isRouterWorking[_curveRouter] = _isRouterWorking;
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
        return curveRouters[chainId];
    }

    /// @dev View function for testing the routing of the strategy
    function getQuote(
        bytes memory data
    ) external view returns (uint256 curveQuote, string memory _curve) {
        uint256 chainId = getChainID();
        address _curveRouter = curveRouters[chainId];
        require(isRouterWorking[_curveRouter] == true, "Router is not available to quote.");

        (
            uint256 amountIn,
            address tokenIn, 
            address tokenOut
        ) = abi.decode(data, (uint256, address, address));

        (, uint256 curveQuote) = ICurveRouter(_curveRouter).get_best_rate(tokenIn, tokenOut, amountIn);
        _curve = curveString;
    }
}
