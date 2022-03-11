// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../interfaces/oracle/IUniswapRouterV2.sol";
import "../interfaces/oracle/ICurveRouter.sol";
import "../interfaces/oracle/IBaseV1Router01.sol";

contract PriceOracle is OwnableUpgradeable {

    address public SOLIDLY_ROUTER;
    address public SPOOKY_ROUTER;
    address public CURVE_ROUTER;

    struct Routers {
        address SPOOKY_ROUTER;
        address SOLIDLY_ROUTER;
        address CURVE_ROUTER;
    }
    mapping(uint256 => Routers) public chainRouters;

    constructor(uint256 chainId, address _spookyRouter, address _solidlyRouter, address _curveRouter) public {
        Routers memory routers = Routers({
            SPOOKY_ROUTER: _spookyRouter,
            SOLIDLY_ROUTER: _solidlyRouter,
            CURVE_ROUTER: _curveRouter
        });
        chainRouters[chainId] = routers;
    }

    function setRouters(uint256 chainId, address _spookyRouter, address _solidlyRouter, address _curveRouter) external onlyOwner {
        Routers memory routers = Routers({
            SPOOKY_ROUTER: _spookyRouter,
            SOLIDLY_ROUTER: _solidlyRouter,
            CURVE_ROUTER: _curveRouter
        });
        chainRouters[chainId] = routers;
    }

    // function getChainID() public view returns (uint256) {
    //     uint256 id;
    //     assembly {
    //         id := chainid()
    //     }
    //     return id;
    // }

    function getUniV2Quote(uint256 chainId) public view returns(address) {
        Routers memory routers = chainRouters[chainId];
        return routers.SPOOKY_ROUTER;
    }

    function getSolidlyQuote(uint256 chainId) public view returns(address) {
        Routers memory routers = chainRouters[chainId];
        return routers.SOLIDLY_ROUTER;    
    }

    function getCurveQuote(uint256 chainId) public view returns(address) {
        Routers memory routers = chainRouters[chainId];
        return routers.CURVE_ROUTER;    
    }

    /// @dev View function for testing the routing of the strategy
    function findOptimalSwap(address tokenIn, address tokenOut, uint256 amountIn, uint256 chainId) external view returns (string memory, uint256 amount) {
        // Check Solidly
        (uint256 solidlyQuote, bool stable) = IBaseV1Router01(getSolidlyQuote(chainId)).getAmountOut(amountIn, tokenIn, tokenOut);

        // Check Curve
        (, uint256 curveQuote) = ICurveRouter(getCurveQuote(chainId)).get_best_rate(tokenIn, tokenOut, amountIn);

        uint256 spookyQuote; // 0 by default

        // Check Spooky (Can Revert)
        address[] memory path = new address[](2);
        path[0] = address(tokenIn);
        path[1] = address(tokenOut);

        try IUniswapRouterV2(getUniV2Quote(chainId)).getAmountsOut(amountIn, path) returns (uint256[] memory spookyAmounts) {
            spookyQuote = spookyAmounts[spookyAmounts.length - 1]; // Last one is the outToken
        } catch (bytes memory) {
            // We ignore as it means it's zero
        }

        // On average, we expect Solidly and Curve to offer better slippage
        // Spooky will be the default case
        if(solidlyQuote > spookyQuote) {
            // Either SOLID or curve
            if(curveQuote > solidlyQuote) {
                // Curve
                return ("curve", curveQuote);
            } else {
                // Solid 
                return ("SOLID", solidlyQuote);
            }

        } else if (curveQuote > spookyQuote) {
            // Curve is greater than both
            return ("curve", curveQuote);
        } else {
            // Spooky is best
            return ("spooky", spookyQuote);
        }
    }
}

