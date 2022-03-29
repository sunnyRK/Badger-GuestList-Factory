// // SPDX-License-Identifier: MIT
// pragma solidity ^0.7.6;

// import "../interfaces/uniswap/IUniswapV3Pool.sol";
// import "../interfaces/uniswap/TickMath.sol";
// import "../interfaces/uniswap/FixedPoint96.sol";
// import "../interfaces/uniswap/FullMath.sol";
// import "../interfaces/oracle/IUniswapRouterV2.sol";
// import "../interfaces/oracle/ICurveRouter.sol";
// import "../interfaces/oracle/IBaseV1Router01.sol";
// import "../interfaces/oracle/IUniswapLPOracleFactory.sol";
// import "hardhat/console.sol";

// contract PriceOracle2 {

//     IUniswapLPOracleFactory public iUniswapLPOracleFactory;

//     // address public SOLIDLY_ROUTER;
//     // address public SPOOKY_ROUTER;
//     // address public CURVE_ROUTER;

//     // struct Routers {
//     //     address SPOOKY_ROUTER;
//     //     address SOLIDLY_ROUTER;
//     //     address CURVE_ROUTER;
//     // }
//     // mapping(uint256 => Routers) public chainRouters;
//     // mapping(uint256 => bool) public ;

//     constructor(
//         address _spookyRouter, 
//         address _solidlyRouter, 
//         address _curveRouter,
//         address _iUniswapLPOracleFactory
//     ) public {
//         Routers memory routers = Routers({
//             SPOOKY_ROUTER: _spookyRouter,
//             SOLIDLY_ROUTER: _solidlyRouter,
//             CURVE_ROUTER: _curveRouter
//         });
//         uint256 chainId = getChainID();
//         chainRouters[chainId] = routers;
//         iUniswapLPOracleFactory = IUniswapLPOracleFactory(_iUniswapLPOracleFactory);
//     }

//     function setRoutersForSpecificChainId(
//         uint256 chainId, 
//         address _spookyRouter, 
//         address _solidlyRouter, 
//         address _curveRouter
//     ) external {
//         Routers memory routers = Routers({
//             SPOOKY_ROUTER: _spookyRouter,
//             SOLIDLY_ROUTER: _solidlyRouter,
//             CURVE_ROUTER: _curveRouter
//         });
//         chainRouters[chainId] = routers;
//     }

//     function getChainID() public view returns (uint256) {
//         uint256 id;
//         assembly {
//             id := chainid()
//         }
//         return id;
//     }

//     function getUniV2Quote() public view returns(address) {
//         uint256 chainId = getChainID();
//         Routers memory routers = chainRouters[chainId];
//         return routers.SPOOKY_ROUTER;
//     }

//     function getSolidlyQuote() public view returns(address) {
//         uint256 chainId = getChainID();
//         Routers memory routers = chainRouters[chainId];
//         return routers.SOLIDLY_ROUTER;    
//     }

//     function getCurveQuote() public view returns(address) {
//         uint256 chainId = getChainID();
//         Routers memory routers = chainRouters[chainId];
//         return routers.CURVE_ROUTER;    
//     }

//     // Uniswap V3 price of TWAP
//     function getSqrtTwapX96(address uniswapV3pool, uint32 twapInterval) public view returns(uint160 sqrtPrice160) {
//         if (twapInterval == 0) {
//             (sqrtPrice160,,,,,,) = IUniswapV3Pool(uniswapV3pool).slot0();
//         } else {
//             uint32[] memory secondsAgos = new uint32[](2);
//             secondsAgos[0] = twapInterval;
//             secondsAgos[1] = 0;
//             (int56[] memory timeCumulatives, ) = IUniswapV3Pool(uniswapV3pool).observe(secondsAgos);
//             sqrtPrice160 = TickMath.getSqrtRatioAtTick(
//                 int24((timeCumulatives[1] - timeCumulatives[0]) / twapInterval)
//             );
//         }
//     }

//     function getPriceX96FromSqrtPriceX96(uint160 sqrtPrice160) public pure returns(uint256 priceX96) {
//         return FullMath.mulDiv(sqrtPrice160, sqrtPrice160, FixedPoint96.Q96);
//     }

//     /// @dev View function for testing the routing of the strategy
//     function findOptimalSwap(address tokenIn, address tokenOut, uint256 amountIn) external view returns (string memory, uint256 amount) {
//         uint256 chainId = getChainID();
//         // Check Solidly
//         (uint256 solidlyQuote, bool stable) = IBaseV1Router01(getSolidlyQuote()).getAmountOut(amountIn, tokenIn, tokenOut);

//         // Check Curve
//         (, uint256 curveQuote) = ICurveRouter(getCurveQuote()).get_best_rate(tokenIn, tokenOut, amountIn);

//         uint256 spookyQuote; // 0 by default

//         // Check Spooky (Can Revert)
//         address[] memory path = new address[](2);
//         path[0] = address(tokenIn);
//         path[1] = address(tokenOut);

//         try IUniswapRouterV2(getUniV2Quote()).getAmountsOut(amountIn, path) returns (uint256[] memory spookyAmounts) {
//             spookyQuote = spookyAmounts[spookyAmounts.length - 1]; // Last one is the outToken
//         } catch (bytes memory) {
//             // We ignore as it means it's zero
//         }

//         // On average, we expect Solidly and Curve to offer better slippage
//         // Spooky will be the default case
//         if(solidlyQuote > spookyQuote) {
//             // Either SOLID or curve
//             if(curveQuote > solidlyQuote) {
//                 // Curve
//                 return ("curve", curveQuote);
//             } else {
//                 // Solid 
//                 return ("SOLID", solidlyQuote);
//             }

//         } else if (curveQuote > spookyQuote) {
//             // Curve is greater than both
//             return ("curve", curveQuote);
//         } else {
//             // Spooky is best
//             return ("spooky", spookyQuote);
//         }
//     }

//     // calculate price of lp token
//     function getUnderlyingPrice(address _lpToken, uint256 _lpAmount) public returns(uint256 totalLpPrice) {
//         uint256 lpPrice = iUniswapLPOracleFactory.getUnderlyingPrice(_lpToken); // price of one lp token
//         require(lpPrice > 0, "Price should be valid!");

//         // calculate total value of lpToken by lp token price and convert in 1e18
//         // lpPrice(1e24) = lpPrice / 1e6 => lpPrice(1e24)  
//         totalLpPrice = _lpAmount * lpPrice / 1e6;
//     }

//     // view method only for lp token price
//     function viewUnderlyingPrice(address _lpToken, uint256 _lpAmount) public view returns(uint256 totalLpPrice) {
//         uint256 lpPrice = iUniswapLPOracleFactory.viewUnderlyingPrice(_lpToken); // price of one lp token
//         require(lpPrice > 0, "Price should be valid!");

//         // calculate total value of lpToken by lp token price and convert in 1e18
//         // lpPrice(1e24) = lpPrice / 1e6 => lpPrice(1e24)  
//         totalLpPrice = _lpAmount * lpPrice / 1e6;
//     }
// }
