pragma solidity ^0.7.6;

interface IUniswapLPOracleFactory {
    function getUnderlyingPrice(address _lpToken) external returns (uint256);
    function viewUnderlyingPrice(address _lpToken) external view returns (uint256);
}
