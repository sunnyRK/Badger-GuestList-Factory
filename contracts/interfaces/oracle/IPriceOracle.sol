
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface IPriceOracle {
    function getUniV2Quote() external view returns(address);
    function getSolidlyQuote() external view returns(address);
    function getCurveQuote() external view returns(address);
    function findOptimalSwap(
        address tokenIn, 
        address tokenOut, 
        uint256 amountIn,
        uint256 chainId
    ) external view returns (string memory, uint256 amount);
}
