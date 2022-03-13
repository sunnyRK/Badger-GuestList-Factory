/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UniswapLPOracleInstanceInterface extends utils.Interface {
  functions: {
    "PERIOD()": FunctionFragment;
    "blockTimestampLast()": FunctionFragment;
    "consult(address,uint256)": FunctionFragment;
    "firstRun()": FunctionFragment;
    "owner()": FunctionFragment;
    "pair()": FunctionFragment;
    "price0Average()": FunctionFragment;
    "price0CumulativeLast()": FunctionFragment;
    "price1Average()": FunctionFragment;
    "price1CumulativeLast()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "update()": FunctionFragment;
    "viewPrice(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "blockTimestampLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "consult",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "firstRun", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pair", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "price0Average",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price1Average",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "update", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewPrice",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockTimestampLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "firstRun", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "price0Average",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price1Average",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "viewPrice", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface UniswapLPOracleInstance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapLPOracleInstanceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    blockTimestampLast(overrides?: CallOverrides): Promise<[number]>;

    consult(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    firstRun(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pair(overrides?: CallOverrides): Promise<[string]>;

    price0Average(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _x: BigNumber }>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    price1Average(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _x: BigNumber }>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewPrice(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;
  };

  PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  blockTimestampLast(overrides?: CallOverrides): Promise<number>;

  consult(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  firstRun(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pair(overrides?: CallOverrides): Promise<string>;

  price0Average(overrides?: CallOverrides): Promise<BigNumber>;

  price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  price1Average(overrides?: CallOverrides): Promise<BigNumber>;

  price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewPrice(
    token: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    blockTimestampLast(overrides?: CallOverrides): Promise<number>;

    consult(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    firstRun(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pair(overrides?: CallOverrides): Promise<string>;

    price0Average(overrides?: CallOverrides): Promise<BigNumber>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    price1Average(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    update(overrides?: CallOverrides): Promise<void>;

    viewPrice(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;

    consult(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    firstRun(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pair(overrides?: CallOverrides): Promise<BigNumber>;

    price0Average(overrides?: CallOverrides): Promise<BigNumber>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    price1Average(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewPrice(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockTimestampLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    consult(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    firstRun(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price0Average(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price0CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price1Average(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price1CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewPrice(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}