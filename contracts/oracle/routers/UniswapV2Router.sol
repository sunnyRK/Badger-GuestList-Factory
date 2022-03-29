// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/oracle/IUniswapRouterV2.sol";
import "hardhat/console.sol";

// SpookyRouter For Fantom
contract UniswapV2Router {

    mapping(uint256 => address) public uniswapV2Routers;
    mapping(address => bool) public isRouterWorking;
    address public governance;
    string public uniswapString = 'uniswapV2';

    constructor(address _uniswapRouter) public {
        governance = msg.sender;
        uint256 chainId = getChainID();
        uniswapV2Routers[chainId] = _uniswapRouter;
        isRouterWorking[_uniswapRouter] = true;
    }

    function setGovernance(address _newGovernance) public {
        require(governance == msg.sender, "Only set by current governance");
        governance = _newGovernance;
    }

    function setRoutersForSpecificChainId(
        uint256 _chainId, 
        address _uniswapRouter,
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        uniswapV2Routers[_chainId] = _uniswapRouter;
        isRouterWorking[_uniswapRouter] = _isRouterWorking;
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
        return uniswapV2Routers[chainId];
    }

    /// @dev View function for testing the routing of the strategy
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
