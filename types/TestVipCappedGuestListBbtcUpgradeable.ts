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

export interface TestVipCappedGuestListBbtcUpgradeableInterface
  extends utils.Interface {
  functions: {
    "authorized(address,uint256,bytes32[])": FunctionFragment;
    "guestRoot()": FunctionFragment;
    "guests(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "proveInvitation(address,bytes32[])": FunctionFragment;
    "remainingTotalDepositAllowed()": FunctionFragment;
    "remainingUserDepositAllowed(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGuestRoot(bytes32)": FunctionFragment;
    "setGuests(address[],bool[])": FunctionFragment;
    "setTotalDepositCap(uint256)": FunctionFragment;
    "setUserDepositCap(uint256)": FunctionFragment;
    "totalDepositCap()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userDepositCap()": FunctionFragment;
    "wrapper()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "authorized",
    values: [string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "guestRoot", values?: undefined): string;
  encodeFunctionData(functionFragment: "guests", values: [string]): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proveInvitation",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "remainingTotalDepositAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "remainingUserDepositAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGuestRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setGuests",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTotalDepositCap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserDepositCap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDepositCap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userDepositCap",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wrapper", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guestRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guests", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proveInvitation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingTotalDepositAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingUserDepositAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGuestRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGuests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTotalDepositCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserDepositCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDepositCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userDepositCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapper", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ProveInvitation(address,bytes32)": EventFragment;
    "SetGuestRoot(bytes32)": EventFragment;
    "SetTotalDepositCap(uint256)": EventFragment;
    "SetUserDepositCap(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProveInvitation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGuestRoot"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTotalDepositCap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetUserDepositCap"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ProveInvitationEvent = TypedEvent<
  [string, string],
  { account: string; guestRoot: string }
>;

export type ProveInvitationEventFilter = TypedEventFilter<ProveInvitationEvent>;

export type SetGuestRootEvent = TypedEvent<[string], { guestRoot: string }>;

export type SetGuestRootEventFilter = TypedEventFilter<SetGuestRootEvent>;

export type SetTotalDepositCapEvent = TypedEvent<
  [BigNumber],
  { cap: BigNumber }
>;

export type SetTotalDepositCapEventFilter =
  TypedEventFilter<SetTotalDepositCapEvent>;

export type SetUserDepositCapEvent = TypedEvent<
  [BigNumber],
  { cap: BigNumber }
>;

export type SetUserDepositCapEventFilter =
  TypedEventFilter<SetUserDepositCapEvent>;

export interface TestVipCappedGuestListBbtcUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestVipCappedGuestListBbtcUpgradeableInterface;

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
    authorized(
      _guest: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    guestRoot(overrides?: CallOverrides): Promise<[string]>;

    guests(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      wrapper_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proveInvitation(
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remainingTotalDepositAllowed(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    remainingUserDepositAllowed(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGuestRoot(
      guestRoot_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGuests(
      _guests: string[],
      _invited: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTotalDepositCap(
      cap_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserDepositCap(
      cap_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalDepositCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userDepositCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    wrapper(overrides?: CallOverrides): Promise<[string]>;
  };

  authorized(
    _guest: string,
    _amount: BigNumberish,
    _merkleProof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  guestRoot(overrides?: CallOverrides): Promise<string>;

  guests(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  initialize(
    wrapper_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  proveInvitation(
    account: string,
    merkleProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remainingTotalDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;

  remainingUserDepositAllowed(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGuestRoot(
    guestRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGuests(
    _guests: string[],
    _invited: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTotalDepositCap(
    cap_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserDepositCap(
    cap_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalDepositCap(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userDepositCap(overrides?: CallOverrides): Promise<BigNumber>;

  wrapper(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authorized(
      _guest: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    guestRoot(overrides?: CallOverrides): Promise<string>;

    guests(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    initialize(wrapper_: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    proveInvitation(
      account: string,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    remainingTotalDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    remainingUserDepositAllowed(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGuestRoot(
      guestRoot_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setGuests(
      _guests: string[],
      _invited: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setTotalDepositCap(
      cap_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserDepositCap(
      cap_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalDepositCap(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userDepositCap(overrides?: CallOverrides): Promise<BigNumber>;

    wrapper(overrides?: CallOverrides): Promise<string>;
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

    "ProveInvitation(address,bytes32)"(
      account?: string | null,
      guestRoot?: BytesLike | null
    ): ProveInvitationEventFilter;
    ProveInvitation(
      account?: string | null,
      guestRoot?: BytesLike | null
    ): ProveInvitationEventFilter;

    "SetGuestRoot(bytes32)"(
      guestRoot?: BytesLike | null
    ): SetGuestRootEventFilter;
    SetGuestRoot(guestRoot?: BytesLike | null): SetGuestRootEventFilter;

    "SetTotalDepositCap(uint256)"(cap?: null): SetTotalDepositCapEventFilter;
    SetTotalDepositCap(cap?: null): SetTotalDepositCapEventFilter;

    "SetUserDepositCap(uint256)"(cap?: null): SetUserDepositCapEventFilter;
    SetUserDepositCap(cap?: null): SetUserDepositCapEventFilter;
  };

  estimateGas: {
    authorized(
      _guest: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guestRoot(overrides?: CallOverrides): Promise<BigNumber>;

    guests(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      wrapper_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proveInvitation(
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remainingTotalDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    remainingUserDepositAllowed(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGuestRoot(
      guestRoot_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGuests(
      _guests: string[],
      _invited: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTotalDepositCap(
      cap_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserDepositCap(
      cap_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalDepositCap(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userDepositCap(overrides?: CallOverrides): Promise<BigNumber>;

    wrapper(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorized(
      _guest: string,
      _amount: BigNumberish,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guestRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guests(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      wrapper_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proveInvitation(
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remainingTotalDepositAllowed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remainingUserDepositAllowed(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGuestRoot(
      guestRoot_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGuests(
      _guests: string[],
      _invited: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTotalDepositCap(
      cap_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserDepositCap(
      cap_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalDepositCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userDepositCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
