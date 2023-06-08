// @ts-nocheck
import { TICK_WIDTH, YEAR } from "@/config/constants/const";
import { useWeb3 } from "@/hooks";
import { IIncentive } from "@/types";
import {
  formatBigInt,
  formatDateDiff,
  formatDateTime,
  formatUSD,
} from "@/utils";
import Link from "next/link";
import { useMemo } from "react";
import { Button } from "../Button";
import { ConnectWallet } from "../ConnectWallet";
import { Table } from "../Table";
import { ActionButtons } from "./ActionButtons";

interface IProps {
  incentiveId?: string;
  data?: any[];
  hasExpired?: boolean;
  title?: string;
  incentive?: IIncentive;
}

const staticColumns = [
  {
    Header: "NFT",
    accessor: "id",
  },
  {
    Header: "Position Age",
    accessor: "transaction",
    Cell: ({ value }) => formatDateDiff(value.timestamp * 1000),
  },
];

export const PositionsTable: React.FC<IProps> = ({
  data,
  incentiveId,
  incentive = null,
  title = "My Positions",
}) => {
  const { account } = useWeb3();
  const columns = useMemo(
    () => [
      ...staticColumns,
      // {
      //   Header: "Position Value",
      //   accessor: "value",
      //   Cell: ({ row: { original: row } }) =>
      //     formatUSD(
      //       (row.liquidity / row.pool.liquidity) * row.pool.totalValueLockedUSD
      //     ),
      // },
      {
        Header: "Position Range",
        accessor: "range",
        Cell: ({ row: { original: row } }) => (
          <>
            <p>
              {(
                (row.tickUpper.tickIdx - row.tickLower.tickIdx) *
                TICK_WIDTH
              ).toFixed(2)}
              %
            </p>
            <p>
              {row.tickUpper.tickIdx - row.tickLower.tickIdx}{" "}
              {row.tickUpper.tickIdx - row.tickLower.tickIdx == 1
                ? "Tick"
                : "Ticks"}
            </p>
          </>
        ),
      },
      {
        Header: "Pending Rewards",
        accessor: "rewards",
        Cell: ({ row: { original: row } }) => (
          <>
            <p>
              {formatBigInt(
                row.incentiveRewards,
                row.incentive.rewardToken.decimals
              )}{" "}
              {row.incentive.rewardToken.symbol}
            </p>
            <p>
              {formatUSD(
                formatBigInt(
                  row.incentiveRewards,
                  row.incentive.rewardToken.decimals
                ) * row.incentive.tokenPriceUSD
              )}
            </p>
          </>
        ),
      },
      {
        Header: "Manage Liquidity",
        accessor: "manage",
        Cell: ({ row: { original } }) => (
          <Link
            target="_blank"
            href={`https://uni.maiadao.io/#/pools/${original.id}`}
          >
            <Button>Manage Pool</Button>
          </Link>
        ),
      },
      {
        Header: "",
        accessor: "stake",
        Cell: ({ row: { original: row } }) =>
          incentive !== null &&
          incentive.minWidth > row.tickUpper.tickIdx - row.tickLower.tickIdx ? (
            "Position range to low to stake"
          ) : (
            <ActionButtons incentiveId={incentiveId} position={row} />
          ),
      },
    ],
    [incentive, incentiveId]
  );

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-white w-full">
      {title && (
        <>
          <h5 className="text-lg font-semibold px-6 w-full grid grid-cols-5">
            {title}
            {incentive !== null && data !== undefined && data.length > 0 && (
              <Link
                target="_blank"
                href={
                  "https://uni.maiadao.io/#/add/" +
                  data[0].pool.token0.id +
                  "/" +
                  data[0].pool.token1.id +
                  "/" +
                  data[0].pool.feeTier
                }
                className="col-start-5"
              >
                <Button className="w-full">Add Liquidity</Button>
              </Link>
            )}
          </h5>
          {incentive !== null && data !== undefined && data.length > 0 && (
            <div className="bg-dark-hard rounded-xl p-4 text-white w-full divide-y divide-blue-200">
              <div className="text-md font-semibold px-6 w-full grid grid-cols-5 mb-1">
                <p>Pool</p>
                <p>Duration</p>
                <p>TVL</p>
                <p>Minimum Range</p>
                <p>Rewards APR</p>
              </div>
              <h5 className="text-md px-6 w-full grid grid-cols-5 pt-2">
                <p>
                  {data[0].pool.token0.symbol}/
                  {data[0].pool.token1.symbol +
                    " " +
                    data[0].pool.feeTier / 10000}
                  % Fee
                </p>
                <div>
                  <p>{formatDateTime(incentive?.startTime * 1000)}</p>
                  <p>{formatDateTime(incentive?.endTime * 1000)}</p>
                </div>
                <p>{formatUSD(data[0].pool.totalValueLockedUSD)}</p>
                <div>
                  <p>±{incentive?.minWidth * TICK_WIDTH}%</p>
                  <p>
                    {incentive?.minWidth}{" "}
                    {incentive?.minWidth == 1 ? "Tick" : "Ticks"}
                  </p>
                </div>
                <p>
                  {(incentive?.tokenPriceUSD > 0 &&
                    incentive?.fullRangeLiquidityUSD > 0 &&
                    (
                      ((formatBigInt(incentive?.reward) *
                        incentive?.tokenPriceUSD) /
                        incentive?.fullRangeLiquidityUSD) *
                      (YEAR / (incentive?.endTime - incentive?.startTime)) *
                      100
                    ).toFixed(2)) ||
                    0}
                  % -{" "}
                  {(incentive?.tokenPriceUSD > 0 &&
                    incentive?.activeLiqudityUSD > 0 &&
                    (
                      ((formatBigInt(incentive?.reward) *
                        incentive?.tokenPriceUSD) /
                        incentive?.activeLiqudityUSD) *
                      (YEAR / (incentive?.endTime - incentive?.startTime)) *
                      100
                    ).toFixed(2)) ||
                    0}
                  %
                </p>
              </h5>
            </div>
          )}
        </>
      )}
      {account ? (
        <Table columns={columns} data={data || []} />
      ) : (
        <>
          <p>Connect your wallet to view your positions</p>
          <ConnectWallet />
        </>
      )}
    </div>
  );
};

export default PositionsTable;
