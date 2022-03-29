// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "../interfaces/uniswap/IUniswapV3Pool.sol";
import "../interfaces/uniswap/TickMath.sol";
import "../interfaces/uniswap/FixedPoint96.sol";
import "../interfaces/uniswap/FullMath.sol";
import "../interfaces/oracle/IUniswapRouterV2.sol";
import "../interfaces/oracle/ICurveRouter.sol";
import "../interfaces/oracle/IBaseV1Router01.sol";
import "../interfaces/oracle/IUniswapLPOracleFactory.sol";
import "hardhat/console.sol";

interface IQuote {
    function getRouter() external view returns(address);
    function getQuote(bytes calldata data) external view returns (uint256 quote);
}

contract PriceOracle {

    IUniswapLPOracleFactory public iUniswapLPOracleFactory;
    mapping(uint256 => address) public routerByIndex;
    mapping(address => uint256) public indexByRouter;
    mapping(uint256 => bool) public isRouterWorking;
    uint256 public totalRouters;
    address public governance;

    constructor(
        address _spookyRouter, 
        address _solidlyRouter, 
        address _curveRouter,
        address _iUniswapLPOracleFactory
    ) public {
        governance = msg.sender;

        uint256 id = totalRouters;
        routerByIndex[1] = _spookyRouter;
        indexByRouter[_spookyRouter] = 1;
        isRouterWorking[1] = true;

        routerByIndex[2] = _solidlyRouter;
        indexByRouter[_solidlyRouter] = 2;
        isRouterWorking[2] = true;

        routerByIndex[3] = _curveRouter;
        indexByRouter[_curveRouter] = 3;
        isRouterWorking[3] = true;

        // routerByIndex[4] = _iUniswapLPOracleFactory;
        // indexByRouter[_iUniswapLPOracleFactory] = 4;
        // isRouterWorking[4] = true;

        totalRouters = 3;

        iUniswapLPOracleFactory = IUniswapLPOracleFactory(_iUniswapLPOracleFactory);
    }

    function setGovernance(address _newGovernance) public {
        require(governance == msg.sender, "Only set by current governance");
        governance = _newGovernance;
    }

    function setRoutersForSpecificChainId(
        address _router, 
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        totalRouters = totalRouters + 1;
        routerByIndex[totalRouters] = _router;
        indexByRouter[_router] = totalRouters;
        isRouterWorking[totalRouters] = _isRouterWorking;
    }

    function disableOrEnableRouter(
        address _router, 
        bool _isRouterWorking
    ) external {
        require(governance == msg.sender, "Only set by current governance");
        uint256 id = indexByRouter[_router];
        isRouterWorking[id] = _isRouterWorking;
    }

    function getBestQuoteFromOracleAggregator(address tokenIn, address tokenOut, uint256 amountIn) external view returns (string memory routerString, uint256 quote) {
        bytes4 selector = IQuote.getQuote.selector;
        bytes memory data = abi.encode(amountIn, tokenIn, tokenOut);

        for (uint256 i=1; i<=totalRouters; i++) {
            address router = routerByIndex[i];
            uint256 id = indexByRouter[router];
            if (isRouterWorking[id]) {
                (bool success, bytes memory returnedData) = address(router).staticcall(abi.encodeWithSignature("getQuote(bytes)", data));
                (uint256 newQuote, string memory newRouterString) = abi.decode(returnedData, (uint256, string));
                if (quote < newQuote) {
                    quote = newQuote;
                    routerString = newRouterString;
                }
            }
        }
        return (routerString, quote);
    }

    // calculate price of lp token
    function getUnderlyingPrice(address _lpToken, uint256 _lpAmount) public returns(uint256 totalLpPrice) {
        uint256 lpPrice = iUniswapLPOracleFactory.getUnderlyingPrice(_lpToken); // price of one lp token
        require(lpPrice > 0, "Price should be valid!");

        // calculate total value of lpToken by lp token price and convert in 1e18
        // lpPrice(1e24) = lpPrice / 1e6 => lpPrice(1e24)  
        totalLpPrice = _lpAmount * lpPrice / 1e6;
    }

    // view method only for lp token price
    function viewUnderlyingPrice(address _lpToken, uint256 _lpAmount) public view returns(uint256 totalLpPrice) {
        uint256 lpPrice = iUniswapLPOracleFactory.viewUnderlyingPrice(_lpToken); // price of one lp token
        require(lpPrice > 0, "Price should be valid!");

        // calculate total value of lpToken by lp token price and convert in 1e18
        // lpPrice(1e24) = lpPrice / 1e6 => lpPrice(1e24)  
        totalLpPrice = _lpAmount * lpPrice / 1e6;
    }
}
