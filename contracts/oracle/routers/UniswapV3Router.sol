// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../../interfaces/uniswap/IUniswapV3Pool.sol";
import "../../interfaces/uniswap/TickMath.sol";
import "../../interfaces/uniswap/FixedPoint96.sol";
import "../../interfaces/uniswap/FullMath.sol";
import "hardhat/console.sol";

contract UniswapV3Router {

    mapping(uint256 => bool) public isUniswapV3Working;
    address public governance;

    constructor() public {
        governance = msg.sender;
    }

    function setGovernance(address _newGovernance) public {
        require(governance == msg.sender, "Only set by current governance");
        governance = _newGovernance;
    }

    function setRoutersForSpecificChainId(
        uint256 _chainId,
        bool _isUniswapV3Working
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        isUniswapV3Working[_chainId] = _isUniswapV3Working;
    }

    function getChainID() public view returns (uint256) {
        uint256 id;
        assembly {
            id := chainid()
        }
        return id;
    }

    // Uniswap V3 price of TWAP
    function getUniswapV3Quote(address uniswapV3pool, uint32 twapInterval) public view returns(uint160 sqrtPrice160) {
        uint256 chainId = getChainID();
        require(isUniswapV3Working[chainId] == true, "Router is not available to quote.");

        if (twapInterval == 0) {
            (sqrtPrice160,,,,,,) = IUniswapV3Pool(uniswapV3pool).slot0();
        } else {
            uint32[] memory secondsAgos = new uint32[](2);
            secondsAgos[0] = twapInterval;
            secondsAgos[1] = 0;
            (int56[] memory timeCumulatives, ) = IUniswapV3Pool(uniswapV3pool).observe(secondsAgos);
            sqrtPrice160 = TickMath.getSqrtRatioAtTick(
                int24((timeCumulatives[1] - timeCumulatives[0]) / twapInterval)
            );
        }
    }

    function getPriceX96FromSqrtPriceX96(uint160 sqrtPrice160) public pure returns(uint256 priceX96) {
        return FullMath.mulDiv(sqrtPrice160, sqrtPrice160, FixedPoint96.Q96);
    }

}
