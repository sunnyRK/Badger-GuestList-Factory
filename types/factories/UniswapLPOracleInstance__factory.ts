/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapLPOracleInstance,
  UniswapLPOracleInstanceInterface,
} from "../UniswapLPOracleInstance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blockTimestampLast",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "firstRun",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price0Average",
    outputs: [
      {
        internalType: "uint224",
        name: "_x",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1Average",
    outputs: [
      {
        internalType: "uint224",
        name: "_x",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "viewPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200245a3803806200245a833981810160405260608110156200003757600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505060006200006e620007eb60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200025b57604051806020016040528060017bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250600760008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550905050604051806020016040528060017bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250600860008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550905050620007e2565b60008373ffffffffffffffffffffffffffffffffffffffff1663e6a4390584846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156200030f57600080fd5b505afa15801562000324573d6000803e3d6000fd5b505050506040513d60208110156200033b57600080fd5b8101908080519060200190929190505050905080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015620003d657600080fd5b505afa158015620003eb573d6000803e3d6000fd5b505050506040513d60208110156200040257600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156200049a57600080fd5b505afa158015620004af573d6000803e3d6000fd5b505050506040513d6020811015620004c657600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b1580156200055e57600080fd5b505afa15801562000573573d6000803e3d6000fd5b505050506040513d60208110156200058a57600080fd5b81019080805190602001909291905050506004819055508073ffffffffffffffffffffffffffffffffffffffff16635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b158015620005e857600080fd5b505afa158015620005fd573d6000803e3d6000fd5b505050506040513d60208110156200061457600080fd5b81019080805190602001909291905050506005819055506000808273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156200067557600080fd5b505afa1580156200068a573d6000803e3d6000fd5b505050506040513d6060811015620006a157600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050600660008291906101000a81548163ffffffff021916908363ffffffff1602179055508193508294505050506000826dffffffffffffffffffffffffffff16141580156200072557506000816dffffffffffffffffffffffffffff1614155b62000798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4e4f5f524553455256455300000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600660046101000a81548160ff021916908315150217905550620007c3620007f360201b60201c565b6000600660046101000a81548160ff0219169083151502179055505050505b50505062000de2565b600033905090565b600080600062000830600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16620009f060201b620012151760201c565b9250925092506000600660009054906101000a900463ffffffff1682039050610e108163ffffffff161015806200087a575060011515600660049054906101000a900460ff161515145b15620009ea5760405180602001604052808263ffffffff166004548703816200089f57fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250600760008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555090505060405180602001604052808263ffffffff166005548603816200093c57fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250600860008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550905050836004819055508260058190555081600660006101000a81548163ffffffff021916908363ffffffff1602179055505b50505050565b600080600062000a0562000c6760201b60201c565b90508373ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b15801562000a4e57600080fd5b505afa15801562000a63573d6000803e3d6000fd5b505050506040513d602081101562000a7a57600080fd5b810190808051906020019092919050505092508373ffffffffffffffffffffffffffffffffffffffff16635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b15801562000ad457600080fd5b505afa15801562000ae9573d6000803e3d6000fd5b505050506040513d602081101562000b0057600080fd5b8101908080519060200190929190505050915060008060008673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801562000b5f57600080fd5b505afa15801562000b74573d6000803e3d6000fd5b505050506040513d606081101562000b8b57600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250925092508363ffffffff168163ffffffff161462000c5d57600081850390508063ffffffff1662000bef848662000c7e60201b620014761760201c565b600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602870196508063ffffffff1662000c34858562000c7e60201b620014761760201c565b600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160286019550505b5050509193909250565b6000640100000000428162000c7857fe5b06905090565b62000c8862000db1565b6000826dffffffffffffffffffffffffffff161162000d0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4669786564506f696e743a204449565f42595f5a45524f00000000000000000081525060200191505060405180910390fd5b6040518060200160405280836dffffffffffffffffffffffffffff16607060ff16866dffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16901b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168162000d8757fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250905092915050565b604051806020016040528060007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b6116688062000df26000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a2e6204511610097578063c3e75bda11610066578063c3e75bda146103c9578063c5700a02146103eb578063d21220a714610415578063f2fde38b1461045f57610100565b8063a2e62045146102fd578063a6bb453914610307578063a8aa1b3114610361578063b4d1d795146103ab57610100565b80635e6aaf2c116100d35780635e6aaf2c146101ed578063715018a6146102475780638da5cb5b14610251578063949c4fa31461029b57610100565b80630dfe1681146101055780633ddac9531461014f5780635909c0d5146101b15780635a3d5493146101cf575b600080fd5b61010d6104a3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019b6004803603604081101561016557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104c9565b6040518082815260200191505060405180910390f35b6101b96107ad565b6040518082815260200191505060405180910390f35b6101d76107b3565b6040518082815260200191505060405180910390f35b6101f56107b9565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61024f6107ed565b005b610259610975565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102e7600480360360408110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061099e565b6040518082815260200191505060405180910390f35b610305610c7a565b005b61030f610e66565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610369610e9a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103b3610ec0565b6040518082815260200191505060405180910390f35b6103d1610ec6565b604051808215151515815260200191505060405180910390f35b6103f3610ed9565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b61041d610eef565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104a16004803603602081101561047557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f15565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610529578190506107a7565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561063757610587610c7a565b61061c6106178360076040518060200160405290816000820160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505061112290919063ffffffff16565b6111f8565b71ffffffffffffffffffffffffffffffffffff1690506107a6565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146106fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f544f4b454e0000000000000000000000000000000000000081525060200191505060405180910390fd5b61078f61078a8360086040518060200160405290816000820160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505061112290919063ffffffff16565b6111f8565b71ffffffffffffffffffffffffffffffffffff1690505b5b92915050565b60045481565b60055481565b60088060000160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905081565b6107f561120d565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156109fe57819050610c74565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0457610ae9610ae48360076040518060200160405290816000820160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505061112290919063ffffffff16565b6111f8565b71ffffffffffffffffffffffffffffffffffff169050610c73565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610bc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f544f4b454e0000000000000000000000000000000000000081525060200191505060405180910390fd5b610c5c610c578360086040518060200160405290816000820160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505061112290919063ffffffff16565b6111f8565b71ffffffffffffffffffffffffffffffffffff1690505b5b92915050565b6000806000610caa600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611215565b9250925092506000600660009054906101000a900463ffffffff1682039050610e108163ffffffff16101580610cf3575060011515600660049054906101000a900460ff161515145b15610e605760405180602001604052808263ffffffff16600454870381610d1657fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250600760008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555090505060405180602001604052808263ffffffff16600554860381610db257fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250600860008201518160000160006101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550905050836004819055508260058190555081600660006101000a81548163ffffffff021916908363ffffffff1602179055505b50505050565b60078060000160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610e1081565b600660049054906101000a900460ff1681565b600660009054906101000a900463ffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610f1d61120d565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fde576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611064576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806115ea6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61112a6115a5565b60008083148061118b575083600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16838486600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16029250828161118857fe5b04145b6111e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806116106023913960400191505060405180910390fd5b60405180602001604052808281525091505092915050565b6000607060ff168260000151901c9050919050565b600033905090565b6000806000611222611460565b90508373ffffffffffffffffffffffffffffffffffffffff16635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b15801561126a57600080fd5b505afa15801561127e573d6000803e3d6000fd5b505050506040513d602081101561129457600080fd5b810190808051906020019092919050505092508373ffffffffffffffffffffffffffffffffffffffff16635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b1580156112ed57600080fd5b505afa158015611301573d6000803e3d6000fd5b505050506040513d602081101561131757600080fd5b8101908080519060200190929190505050915060008060008673ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561137557600080fd5b505afa158015611389573d6000803e3d6000fd5b505050506040513d606081101561139f57600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250925092508363ffffffff168163ffffffff161461145657600081850390508063ffffffff166113f58486611476565b600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602870196508063ffffffff1661142d8585611476565b600001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160286019550505b5050509193909250565b6000640100000000428161147057fe5b06905090565b61147e6115b8565b6000826dffffffffffffffffffffffffffff1611611504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4669786564506f696e743a204449565f42595f5a45524f00000000000000000081525060200191505060405180910390fd5b6040518060200160405280836dffffffffffffffffffffffffffff16607060ff16866dffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16901b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168161157b57fe5b047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250905092915050565b6040518060200160405280600081525090565b604051806020016040528060007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734669786564506f696e743a204d554c5449504c49434154494f4e5f4f564552464c4f57a2646970667358221220222776af6ed14f162da7b9cdbba1d38f4c1a3673443ace5afbeb9ab656be987f64736f6c63430006060033";

type UniswapLPOracleInstanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapLPOracleInstanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapLPOracleInstance__factory extends ContractFactory {
  constructor(...args: UniswapLPOracleInstanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _factory: string,
    _tokenA: string,
    _tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapLPOracleInstance> {
    return super.deploy(
      _factory,
      _tokenA,
      _tokenB,
      overrides || {}
    ) as Promise<UniswapLPOracleInstance>;
  }
  getDeployTransaction(
    _factory: string,
    _tokenA: string,
    _tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _tokenA,
      _tokenB,
      overrides || {}
    );
  }
  attach(address: string): UniswapLPOracleInstance {
    return super.attach(address) as UniswapLPOracleInstance;
  }
  connect(signer: Signer): UniswapLPOracleInstance__factory {
    return super.connect(signer) as UniswapLPOracleInstance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapLPOracleInstanceInterface {
    return new utils.Interface(_abi) as UniswapLPOracleInstanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapLPOracleInstance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapLPOracleInstance;
  }
}
