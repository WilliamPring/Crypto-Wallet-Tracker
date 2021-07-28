
import { OverviewInfo } from '.'
import { CoinsProps } from '@crypto-wallet-tracker/props';

export const overviewReducer = (
  state: OverviewInfo={},
  action: {
    type: string;
    payload?: unknown;
  }): OverviewInfo => {
      console.log("staet", state)

  switch (action.type) {
    case 'OVERVIEW_WALLET_INFO': {
      return { serachFetched : false };
    }
    case 'OVERVIEW_WALLET_INFO_SUCCESS': {
      const data = action.payload as Array<CoinsProps>
      return {
        ...state,
        serachFetched: true,
        data
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}