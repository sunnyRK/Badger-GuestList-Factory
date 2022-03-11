/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IPriceOracleInterface extends utils.Interface {
  functions: {
    "findOptimalSwap(address,address,uint256,uint256)": FunctionFragment;
    "getCurveQuote()": FunctionFragment;
    "getSolidlyQuote()": FunctionFragment;
    "getUniV2Quote()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "findOptimalSwap",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurveQuote",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSolidlyQuote",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUniV2Quote",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "findOptimalSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurveQuote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSolidlyQuote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUniV2Quote",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPriceOracleInterface;

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
    findOptimalSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { amount: BigNumber }>;

    getCurveQuote(overrides?: CallOverrides): Promise<[string]>;

    getSolidlyQuote(overrides?: CallOverrides): Promise<[string]>;

    getUniV2Quote(overrides?: CallOverrides): Promise<[string]>;
  };

  findOptimalSwap(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { amount: BigNumber }>;

  getCurveQuote(overrides?: CallOverrides): Promise<string>;

  getSolidlyQuote(overrides?: CallOverrides): Promise<string>;

  getUniV2Quote(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    findOptimalSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { amount: BigNumber }>;

    getCurveQuote(overrides?: CallOverrides): Promise<string>;

    getSolidlyQuote(overrides?: CallOverrides): Promise<string>;

    getUniV2Quote(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    findOptimalSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurveQuote(overrides?: CallOverrides): Promise<BigNumber>;

    getSolidlyQuote(overrides?: CallOverrides): Promise<BigNumber>;

    getUniV2Quote(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    findOptimalSwap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurveQuote(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSolidlyQuote(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUniV2Quote(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
