# Badger-GuestList-Factory (Gitcoin-GR13)

## Architechture

There is `GuestProxyFactory` is a factory contract and it uses `GenericProxyFactory or ClonesUpgradeable from OpenZeppelin` to deploy `TestVipCappedGuestListBbtcUpgradeable`.  

There is `PriceOracle` to fetch the price from different on chain apis. like solidly, curve, uniswap etc. also it maintains registery by chainId for routers.

- currently testcases are writtern in hardhat.

# Run

1). Clone repo 
- https://github.com/sunnyRK/Badger-GuestList-Factory.git  

2). npm install  

3). add .env like .env.example  

4). compile  
-   npx hardhat compile

5). Start local node for fantom chain in terminal-1
-   npx hardhat node  

6). Run testcases in terminal-2
-   npx hardhat test --network local
