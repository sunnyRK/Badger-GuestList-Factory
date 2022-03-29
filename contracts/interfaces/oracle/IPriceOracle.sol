
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface IPriceOracle {
    function getUniV2Quote() external view returns(address);
    function getSolidlyQuote() external view returns(address);
    function getCurveQuote() external view returns(address);
    function findOptimalSwap(address tokenIn, address tokenOut, uint256 amountIn) external view returns (string memory, uint256 amount);
    function getBestQuoteFromOracleAggregator(address tokenIn, address tokenOut, uint256 amountIn) external view returns (string memory, uint256 amount);
    function getUnderlyingPrice(address _lpToken, uint256 _lpAmount) external returns(uint256 totalLpPrice);
    function viewUnderlyingPrice(address _lpToken, uint256 _lpAmount) external view returns(uint256 totalLpPrice);
}
