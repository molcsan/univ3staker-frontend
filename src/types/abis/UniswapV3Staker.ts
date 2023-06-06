/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IUniswapV3Staker {
  export type IncentiveKeyStruct = {
    rewardToken: PromiseOrValue<string>;
    pool: PromiseOrValue<string>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    refundee: PromiseOrValue<string>;
  };

  export type IncentiveKeyStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    rewardToken: string;
    pool: string;
    startTime: BigNumber;
    endTime: BigNumber;
    refundee: string;
  };
}

export interface UniswapV3StakerInterface extends utils.Interface {
  functions: {
    "claimReward(address,address,uint256)": FunctionFragment;
    "createIncentive((address,address,uint256,uint256,address),uint256,int24)": FunctionFragment;
    "deposits(uint256)": FunctionFragment;
    "endIncentive((address,address,uint256,uint256,address))": FunctionFragment;
    "factory()": FunctionFragment;
    "getRewardInfo((address,address,uint256,uint256,address),uint256)": FunctionFragment;
    "incentives(bytes32)": FunctionFragment;
    "maxIncentiveDuration()": FunctionFragment;
    "maxIncentiveStartLeadTime()": FunctionFragment;
    "minWidths(bytes32)": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "nonfungiblePositionManager()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "rewards(address,address)": FunctionFragment;
    "setMinimumWidth((address,address,uint256,uint256,address),int24)": FunctionFragment;
    "stakeToken((address,address,uint256,uint256,address),uint256)": FunctionFragment;
    "stakes(uint256,bytes32)": FunctionFragment;
    "transferDeposit(uint256,address)": FunctionFragment;
    "unstakeToken((address,address,uint256,uint256,address),uint256)": FunctionFragment;
    "withdrawToken(uint256,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimReward"
      | "createIncentive"
      | "deposits"
      | "endIncentive"
      | "factory"
      | "getRewardInfo"
      | "incentives"
      | "maxIncentiveDuration"
      | "maxIncentiveStartLeadTime"
      | "minWidths"
      | "multicall"
      | "nonfungiblePositionManager"
      | "onERC721Received"
      | "rewards"
      | "setMinimumWidth"
      | "stakeToken"
      | "stakes"
      | "transferDeposit"
      | "unstakeToken"
      | "withdrawToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimReward",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createIncentive",
    values: [
      IUniswapV3Staker.IncentiveKeyStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endIncentive",
    values: [IUniswapV3Staker.IncentiveKeyStruct]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardInfo",
    values: [IUniswapV3Staker.IncentiveKeyStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "incentives",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxIncentiveDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxIncentiveStartLeadTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minWidths",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "nonfungiblePositionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumWidth",
    values: [IUniswapV3Staker.IncentiveKeyStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values: [IUniswapV3Staker.IncentiveKeyStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakes",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferDeposit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeToken",
    values: [IUniswapV3Staker.IncentiveKeyStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "incentives", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxIncentiveDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxIncentiveStartLeadTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minWidths", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nonfungiblePositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumWidth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "DepositTransferred(uint256,address,address)": EventFragment;
    "IncentiveCreated(address,address,uint256,uint256,address,int24,uint256)": EventFragment;
    "IncentiveEnded(bytes32,uint256)": EventFragment;
    "RewardClaimed(address,uint256)": EventFragment;
    "TokenStaked(uint256,bytes32,uint128)": EventFragment;
    "TokenUnstaked(uint256,bytes32)": EventFragment;
    "UpdatedMinimumWidth(bytes32,int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncentiveCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncentiveEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenStaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnstaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedMinimumWidth"): EventFragment;
}

export interface DepositTransferredEventObject {
  tokenId: BigNumber;
  oldOwner: string;
  newOwner: string;
}
export type DepositTransferredEvent = TypedEvent<
  [BigNumber, string, string],
  DepositTransferredEventObject
>;

export type DepositTransferredEventFilter =
  TypedEventFilter<DepositTransferredEvent>;

export interface IncentiveCreatedEventObject {
  rewardToken: string;
  pool: string;
  startTime: BigNumber;
  endTime: BigNumber;
  refundee: string;
  minWidth: number;
  reward: BigNumber;
}
export type IncentiveCreatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, number, BigNumber],
  IncentiveCreatedEventObject
>;

export type IncentiveCreatedEventFilter =
  TypedEventFilter<IncentiveCreatedEvent>;

export interface IncentiveEndedEventObject {
  incentiveId: string;
  refund: BigNumber;
}
export type IncentiveEndedEvent = TypedEvent<
  [string, BigNumber],
  IncentiveEndedEventObject
>;

export type IncentiveEndedEventFilter = TypedEventFilter<IncentiveEndedEvent>;

export interface RewardClaimedEventObject {
  to: string;
  reward: BigNumber;
}
export type RewardClaimedEvent = TypedEvent<
  [string, BigNumber],
  RewardClaimedEventObject
>;

export type RewardClaimedEventFilter = TypedEventFilter<RewardClaimedEvent>;

export interface TokenStakedEventObject {
  tokenId: BigNumber;
  incentiveId: string;
  liquidity: BigNumber;
}
export type TokenStakedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  TokenStakedEventObject
>;

export type TokenStakedEventFilter = TypedEventFilter<TokenStakedEvent>;

export interface TokenUnstakedEventObject {
  tokenId: BigNumber;
  incentiveId: string;
}
export type TokenUnstakedEvent = TypedEvent<
  [BigNumber, string],
  TokenUnstakedEventObject
>;

export type TokenUnstakedEventFilter = TypedEventFilter<TokenUnstakedEvent>;

export interface UpdatedMinimumWidthEventObject {
  incentiveId: string;
  minWidth: number;
}
export type UpdatedMinimumWidthEvent = TypedEvent<
  [string, number],
  UpdatedMinimumWidthEventObject
>;

export type UpdatedMinimumWidthEventFilter =
  TypedEventFilter<UpdatedMinimumWidthEvent>;

export interface UniswapV3Staker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV3StakerInterface;

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
    claimReward(
      rewardToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amountRequested: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      reward: PromiseOrValue<BigNumberish>,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number] & {
        owner: string;
        numberOfStakes: number;
        tickLower: number;
        tickUpper: number;
      }
    >;

    endIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getRewardInfo(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        reward: BigNumber;
        secondsInsideX128: BigNumber;
      }
    >;

    incentives(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalRewardUnclaimed: BigNumber;
        totalSecondsClaimedX128: BigNumber;
        numberOfStakes: BigNumber;
      }
    >;

    maxIncentiveDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    minWidths(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setMinimumWidth(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakes(
      tokenId: PromiseOrValue<BigNumberish>,
      incentiveId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        secondsPerLiquidityInsideInitialX128: BigNumber;
        liquidity: BigNumber;
      }
    >;

    transferDeposit(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unstakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claimReward(
    rewardToken: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amountRequested: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createIncentive(
    key: IUniswapV3Staker.IncentiveKeyStruct,
    reward: PromiseOrValue<BigNumberish>,
    minimumWidth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposits(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, number, number, number] & {
      owner: string;
      numberOfStakes: number;
      tickLower: number;
      tickUpper: number;
    }
  >;

  endIncentive(
    key: IUniswapV3Staker.IncentiveKeyStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  getRewardInfo(
    key: IUniswapV3Staker.IncentiveKeyStruct,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reward: BigNumber; secondsInsideX128: BigNumber }
  >;

  incentives(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalRewardUnclaimed: BigNumber;
      totalSecondsClaimedX128: BigNumber;
      numberOfStakes: BigNumber;
    }
  >;

  maxIncentiveDuration(overrides?: CallOverrides): Promise<BigNumber>;

  maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<BigNumber>;

  minWidths(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewards(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setMinimumWidth(
    key: IUniswapV3Staker.IncentiveKeyStruct,
    minimumWidth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakeToken(
    key: IUniswapV3Staker.IncentiveKeyStruct,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakes(
    tokenId: PromiseOrValue<BigNumberish>,
    incentiveId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      secondsPerLiquidityInsideInitialX128: BigNumber;
      liquidity: BigNumber;
    }
  >;

  transferDeposit(
    tokenId: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unstakeToken(
    key: IUniswapV3Staker.IncentiveKeyStruct,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    tokenId: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimReward(
      rewardToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amountRequested: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      reward: PromiseOrValue<BigNumberish>,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, number] & {
        owner: string;
        numberOfStakes: number;
        tickLower: number;
        tickUpper: number;
      }
    >;

    endIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    getRewardInfo(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        reward: BigNumber;
        secondsInsideX128: BigNumber;
      }
    >;

    incentives(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalRewardUnclaimed: BigNumber;
        totalSecondsClaimedX128: BigNumber;
        numberOfStakes: BigNumber;
      }
    >;

    maxIncentiveDuration(overrides?: CallOverrides): Promise<BigNumber>;

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<BigNumber>;

    minWidths(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    rewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMinimumWidth(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakes(
      tokenId: PromiseOrValue<BigNumberish>,
      incentiveId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        secondsPerLiquidityInsideInitialX128: BigNumber;
        liquidity: BigNumber;
      }
    >;

    transferDeposit(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DepositTransferred(uint256,address,address)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): DepositTransferredEventFilter;
    DepositTransferred(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): DepositTransferredEventFilter;

    "IncentiveCreated(address,address,uint256,uint256,address,int24,uint256)"(
      rewardToken?: PromiseOrValue<string> | null,
      pool?: PromiseOrValue<string> | null,
      startTime?: null,
      endTime?: null,
      refundee?: null,
      minWidth?: null,
      reward?: null
    ): IncentiveCreatedEventFilter;
    IncentiveCreated(
      rewardToken?: PromiseOrValue<string> | null,
      pool?: PromiseOrValue<string> | null,
      startTime?: null,
      endTime?: null,
      refundee?: null,
      minWidth?: null,
      reward?: null
    ): IncentiveCreatedEventFilter;

    "IncentiveEnded(bytes32,uint256)"(
      incentiveId?: PromiseOrValue<BytesLike> | null,
      refund?: null
    ): IncentiveEndedEventFilter;
    IncentiveEnded(
      incentiveId?: PromiseOrValue<BytesLike> | null,
      refund?: null
    ): IncentiveEndedEventFilter;

    "RewardClaimed(address,uint256)"(
      to?: PromiseOrValue<string> | null,
      reward?: null
    ): RewardClaimedEventFilter;
    RewardClaimed(
      to?: PromiseOrValue<string> | null,
      reward?: null
    ): RewardClaimedEventFilter;

    "TokenStaked(uint256,bytes32,uint128)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      incentiveId?: PromiseOrValue<BytesLike> | null,
      liquidity?: null
    ): TokenStakedEventFilter;
    TokenStaked(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      incentiveId?: PromiseOrValue<BytesLike> | null,
      liquidity?: null
    ): TokenStakedEventFilter;

    "TokenUnstaked(uint256,bytes32)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      incentiveId?: PromiseOrValue<BytesLike> | null
    ): TokenUnstakedEventFilter;
    TokenUnstaked(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      incentiveId?: PromiseOrValue<BytesLike> | null
    ): TokenUnstakedEventFilter;

    "UpdatedMinimumWidth(bytes32,int24)"(
      incentiveId?: PromiseOrValue<BytesLike> | null,
      minWidth?: null
    ): UpdatedMinimumWidthEventFilter;
    UpdatedMinimumWidth(
      incentiveId?: PromiseOrValue<BytesLike> | null,
      minWidth?: null
    ): UpdatedMinimumWidthEventFilter;
  };

  estimateGas: {
    claimReward(
      rewardToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amountRequested: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      reward: PromiseOrValue<BigNumberish>,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    endIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardInfo(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incentives(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxIncentiveDuration(overrides?: CallOverrides): Promise<BigNumber>;

    maxIncentiveStartLeadTime(overrides?: CallOverrides): Promise<BigNumber>;

    minWidths(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMinimumWidth(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakes(
      tokenId: PromiseOrValue<BigNumberish>,
      incentiveId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferDeposit(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unstakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      rewardToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amountRequested: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      reward: PromiseOrValue<BigNumberish>,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    endIncentive(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardInfo(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incentives(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxIncentiveDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxIncentiveStartLeadTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minWidths(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonfungiblePositionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMinimumWidth(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      minimumWidth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakes(
      tokenId: PromiseOrValue<BigNumberish>,
      incentiveId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferDeposit(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unstakeToken(
      key: IUniswapV3Staker.IncentiveKeyStruct,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      tokenId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
