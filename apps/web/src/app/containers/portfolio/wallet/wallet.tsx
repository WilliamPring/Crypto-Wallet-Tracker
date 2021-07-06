import './wallet.module.scss';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
/* eslint-disable-next-line */
export interface WalletsProps {}

export const Wallet: FC = (props: WalletsProps) => {
  const { walletId } = useParams<{ walletId: string }>();
  return (
    <div>
      <h1>Welcome to wallet!</h1>
    </div>
  );
};
Wallet.displayName = 'Wallet';
export default Wallet;
