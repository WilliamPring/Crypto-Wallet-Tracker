import Table from 'react-bootstrap/Table';
import { FC } from 'react';
import { toUpper } from 'lodash';
import Button from 'react-bootstrap/Button';
/* eslint-disable-next-line */
import { CoinsProps } from '@crypto-wallet-tracker/props';
import { Link } from 'react-router-dom';

export const Coin: FC<CoinsProps> = ({
  imageUrl,
  url,
  name,
  ticketName,
  userCoinWalletSummary,
}) => {
  return (
    <tr>
      <td colSpan={2} style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img style={{ height: 50 }} src={imageUrl} />
        </div>
        <div>
          <p style={{ marginBottom: 0 }}>{toUpper(name)}</p>
          <a href={url}>{toUpper(ticketName)}</a>
        </div>
      </td>
      <td>{userCoinWalletSummary.totalAmount}</td>
      <td>{userCoinWalletSummary.addressCount}</td>
      <td style={{ marginLeft: 'auto' }}>
        <Link to={`wallet/${userCoinWalletSummary.id}`}>
          <Button>View </Button>
        </Link>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </td>
    </tr>
  );
};
