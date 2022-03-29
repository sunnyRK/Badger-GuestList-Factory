// pragma solidity >=0.5.0;

// import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
// import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
// import "@uniswap/v3-core/contracts/libraries/FixedPoint96.sol";
// import "@uniswap/v3-core/contracts/libraries/FullMath.sol";

// contract TwapGetter {
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
// }