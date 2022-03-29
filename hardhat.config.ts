import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
// import 'hardhat-gas-reporter';
require("solidity-coverage");
import networks from './hardhat.network';

import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from 'hardhat/config';
import { version } from 'os';

const config: HardhatUserConfig = {
  mocha: {
    timeout: 30000000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks,
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: "0.6.6",
      },
      {
        version: "0.7.6",
      },
      {
        version: '0.8.4',
      }
    ],
    // version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
};

export default config;