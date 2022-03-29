// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/oracle/IBaseV1Router01.sol";
import "hardhat/console.sol";

contract SolidlyRouter {

    /// @notice chainId -> solidly router address
    mapping(uint256 => address) public solidlyRouters;

    /// @notice solidly router address -> bool(is router is working)
    mapping(address => bool) public isRouterWorking;

    /// @notice owner of SolidlyRouter
    address public governance;

    /// @notice solidily name
    string public solidlyString = 'solidily';

    /**
     * @notice constructor of SolidlyRouter contract
     */
    constructor(address _solidlyRouter) public {
        governance = msg.sender;
        uint256 chainId = getChainID();
        solidlyRouters[chainId] = _solidlyRouter;
        isRouterWorking[_solidlyRouter] = true;
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
     * @param _solidlyRouter curve router address
     * @param _isRouterWorking is router in working mode or not
     */
    function addRouterForChainId(
        uint256 _chainId, 
        address _solidlyRouter,
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        solidlyRouters[_chainId] = _solidlyRouter;
        isRouterWorking[_solidlyRouter] = _isRouterWorking;
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
        return solidlyRouters[chainId];
    }

    /**
     * @notice getQuote get price of tokenIn in tokenOut for current chainid
     */
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
