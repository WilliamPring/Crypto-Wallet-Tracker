
import {OverviewContext} from '.'
import {OVERVIEW_WALLET_INFO, OVERVIEW_WALLET_INFO_SUCCESS} from './types'
import  {useContext} from 'react'
import { CoinsProps } from '@crypto-wallet-tracker/props';


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

const APICALLMOCK = (): Promise<Array<CoinsProps>> => new Promise((resolve, reject) => {
  resolve({ ...data });
});

export const getOverview = () => {
  const context = useContext(OverviewContext);
  if (!context) {
    throw new Error(`getFavoriteManga must be used within a CountProvider`);
  }
  const [state, dispatch] = context;
  const userOverviewWallet = () => {
    dispatch({ type: OVERVIEW_WALLET_INFO})
    return APICALLMOCK().then(() => dispatch({ type: OVERVIEW_WALLET_INFO_SUCCESS, payload: {data}  }))
  }

  //end
  return {
    state,
    dispatch,
    userOverviewWallet
  };
}
