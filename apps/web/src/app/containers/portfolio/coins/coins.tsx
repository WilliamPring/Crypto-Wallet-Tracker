import { FC, useState } from 'react';
import { CoinsProps } from '@crypto-wallet-tracker/props';
import { Coin } from '../../../component/coin/coin';

export const Coins: FC<{ coins: Array<CoinsProps> }> = ({ coins = [] }) => {
  return (
    <>
      {coins && coins.length > 0
        ? coins.map((coin) => <Coin key={coin.ticketName} {...coin} />)
        : ''}
    </>
  );
};
