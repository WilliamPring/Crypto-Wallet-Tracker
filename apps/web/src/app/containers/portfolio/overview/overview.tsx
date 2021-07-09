import React, { FC, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './overview.module.scss';
import { Coin } from '../../../component/coins/coins';
import { getOverview } from '@crypto-wallet-tracker/context';
import { CoinsProps } from '@crypto-wallet-tracker/props';
import { map } from 'lodash';
/* eslint-disable-next-line */
export interface OverviewProps {}
const data = [
  {
    name: 'bitcoin',
    ticketName: 'btc',
    url: 'https://coinmarketcap.com/currencies/bitcoin/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png',
    userCoinWalletSummary: {
      addressCount: 2,
      totalAmount: 3.6,
      id: 1,
    },
  },
] as Array<CoinsProps>;
export const Overview: FC<OverviewProps> = (props: OverviewProps) => {
  const { state, dispatch, userOverviewWallet } = getOverview();
  useEffect(() => {
    userOverviewWallet();
    console.log(state);
  }, []);
  console.log(state);
  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Crypto Assets</th>
            <th>Amount</th>
            <th>Address #</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.serachFetched ? '' : 'LOADING'}
          {data.map((coin) => (
            <Coin key={coin.ticketName} {...coin} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
Overview.displayName = 'Overview';
export default Overview;
