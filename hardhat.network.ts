import { HardhatUserConfig } from 'hardhat/config';
import * as dotenv from "dotenv";

dotenv.config();

const alchemyKey = process.env.ALCHEMY_API_KEY;
const infuraApiKey = process.env.INFURA_API_KEY;
const mnemonic = process.env.MNEMONIC;

const networks: HardhatUserConfig['networks'] = {
  hardhat: {
    forking: {
      url: "https://rpc.ftm.tools/",
    },
    chainId: 250,
    allowUnlimitedContractSize: true,
  },
  local: {
    url: "http://localhost:8545",
    timeout: 1000000 //1000 secs
  },
  ftm: {
    url: "https://rpc.ftm.tools/",
    timeout: 1000000 //1000 secs
  }
};
  
if (infuraApiKey && mnemonic) {

  networks.kovan = {
    url: `https://kovan.infura.io/v3/${infuraApiKey}`,
    accounts: {
      mnemonic,
    },
  };
  
  networks.ropsten = {
    url: `https://ropsten.infura.io/v3/${infuraApiKey}`,
    accounts: {
      mnemonic,
    },
  };

  networks.rinkeby = {
    url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
    accounts: {
      mnemonic,
    },
  };

  networks.mainnet = {
    url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyKey}`,
    accounts: {
      mnemonic,
    },
  };
} else {
  console.warn('No infura or hdwallet available for testnets');
}

export default networks;