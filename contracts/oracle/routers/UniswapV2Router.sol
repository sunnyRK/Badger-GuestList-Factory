// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/oracle/IUniswapRouterV2.sol";
import "hardhat/console.sol";

// SpookyRouter For Fantom
contract UniswapV2Router {

    /// @notice chainId -> uniswapV2 router address
    mapping(uint256 => address) public uniswapV2Routers;

    /// @notice uniswapV2 router address -> bool(is router is working)
    mapping(address => bool) public isRouterWorking;

    /// @notice owner of UniswapV2Router
    address public governance;

    /// @notice uniswapV2 name
    string public uniswapString = 'uniswapV2';

    /**
     * @notice constructor of UniswapV2Router contract
     */
    constructor(address _uniswapRouter) public {
        governance = msg.sender;
        uint256 chainId = getChainID();
        uniswapV2Routers[chainId] = _uniswapRouter;
        isRouterWorking[_uniswapRouter] = true;
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
     * @param _uniswapRouter curve router address
     * @param _isRouterWorking is router in working mode or not
     */
    function addRouterForChainId(
        uint256 _chainId, 
        address _uniswapRouter,
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        uniswapV2Routers[_chainId] = _uniswapRouter;
        isRouterWorking[_uniswapRouter] = _isRouterWorking;
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
        return uniswapV2Routers[chainId];
    }

    /**
     * @notice getQuote get price of tokenIn in tokenOut for current chainid
     */
    function getQuote(
        bytes memory data
    ) external view returns (uint256 spookyQuote, string memory _uniswap) {
        uint256 chainId = getChainID();
        address _uniswapV2Router = uniswapV2Routers[chainId];
        require(isRouterWorking[_uniswapV2Router] == true, "Router is not available to quote.");
        (
            uint256 amountIn,
            address tokenIn, 
            address tokenOut
        ) = abi.decode(data, (uint256, address, address));

        // Check Spooky (Can Revert)
        address[] memory path = new address[](2);
        path[0] = address(tokenIn);
        path[1] = address(tokenOut);

        try IUniswapRouterV2(_uniswapV2Router).getAmountsOut(amountIn, path) returns (uint256[] memory spookyAmounts) {
            spookyQuote = spookyAmounts[spookyAmounts.length - 1]; // Last one is the outToken
        } catch (bytes memory) {
            // We ignore as it means it's zero
        }
        _uniswap = uniswapString;
    }
}
