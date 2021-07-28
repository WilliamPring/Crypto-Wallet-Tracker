import { FC, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import './overview.module.scss';
import { getOverview } from '@crypto-wallet-tracker/context';
import { CoinsProps } from '@crypto-wallet-tracker/props';
import { Coins } from '../coins/coins';
/* eslint-disable-next-line */
export interface OverviewProps {}
export const Overview: FC<OverviewProps> = (props: OverviewProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { state, userOverviewWallet } = getOverview();
  useEffect(() => {
    userOverviewWallet();
  }, []);
  console.log(state?.data);
  return (
    <div className="container-fluid">
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
          <Coins coins={state.data} />
          {state.serachFetched ? '' : 'LOADING.....'}
          {state.serachFetched && state.data.length === 0 && (
            <div>'No Data.....'</div>
          )}
        </tbody>
      </Table>
    </div>
  );
};
Overview.displayName = 'Overview';
export default Overview;
