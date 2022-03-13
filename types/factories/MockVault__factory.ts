/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockVault, MockVaultInterface } from "../MockVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063144fa6d71461003b578063fc0c546a14610057575b600080fd5b610055600480360381019061005091906100f1565b610075565b005b61005f6100b8565b60405161006c9190610129565b60405180910390f35b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506100eb81610176565b92915050565b60006020828403121561010357600080fd5b6000610111848285016100dc565b91505092915050565b61012381610144565b82525050565b600060208201905061013e600083018461011a565b92915050565b600061014f82610156565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61017f81610144565b811461018a57600080fd5b5056fea26469706673582212202419627a631d563e59da575b3e72d3e8143739a252d0c7686b9f78f95a0ea13064736f6c63430008040033";

type MockVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVault__factory extends ContractFactory {
  constructor(...args: MockVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVault> {
    return super.deploy(overrides || {}) as Promise<MockVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVaultInterface {
    return new utils.Interface(_abi) as MockVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
  }
}
