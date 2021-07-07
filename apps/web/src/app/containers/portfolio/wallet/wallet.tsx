import './wallet.module.scss';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cryptoStrategy, CoinType } from '@crypto-wallet-tracker/common';

/* eslint-disable-next-line */
export interface WalletsProps {}

export const Wallet: FC = (props: WalletsProps) => {
  const { walletId } = useParams<{ walletId: string }>();
  const [walletData, setWalletInfo] = useState();
  useEffect(() => {
    const data = cryptoStrategy[CoinType.BTC].walletInfo([]).then((d) => {
      setWalletInfo(d);
    });
  }, []);
  console.log(walletData);
  return (
    <div>
      <h1>Welcome to wallet!</h1>
    </div>
  );
};
Wallet.displayName = 'Wallet';
export default Wallet;
