// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/oracle/ICurveRouter.sol";
import "hardhat/console.sol";

contract CurveRouter {

    /// @notice chainId -> curve router address
    mapping(uint256 => address) public curveRouters;

    /// @notice curve router address -> bool(is router is working)
    mapping(address => bool) public isRouterWorking;

    /// @notice owner of CurveRouter
    address public governance;

    /// @notice curve name
    string public curveString = 'curve';

    /**
     * @notice constructor of CurveRouter contract
     */
    constructor(address _curveRouter) public {
        governance = msg.sender;
        uint256 chainId = getChainID();
        curveRouters[chainId] = _curveRouter;
        isRouterWorking[_curveRouter] = true;
    }

    /**
     * @notice set new Governance by current governance
     * @param _newGovernance newGovernance address
     */    
    function setGovernance(address _newGovernance) public {
        require(governance == msg.sender, "Only set by current governance");
        governance = _newGovernance;
    }

    /**
     * @notice addRouterForChainId by current governance
     * @param _chainId chain id of network
     * @param _curveRouter curve router address
     * @param _isRouterWorking is router in working mode or not
     */
    function addRouterForChainId(
        uint256 _chainId, 
        address _curveRouter,
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        curveRouters[_chainId] = _curveRouter;
        isRouterWorking[_curveRouter] = _isRouterWorking;
    }

    /**
     * @notice getChainID fetch chain id of current network
     */
    function getChainID() public view returns (uint256) {
        uint256 id;
        assembly {
            id := chainid()
        }
        return id;
    }

    /**
     * @notice getRouter get router address by chain id
     */
    function getRouter() public view returns(address) {
        uint256 chainId = getChainID();
        return curveRouters[chainId];
    }

    /**
     * @notice getQuote get price of tokenIn in tokenOut for current chainid
     */
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
