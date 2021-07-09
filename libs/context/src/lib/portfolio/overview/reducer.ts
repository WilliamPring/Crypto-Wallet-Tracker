
import { OverviewInfo }from '.'
export const overviewReducer = (
  state: OverviewInfo={},
  action: {
    type: string;
    payload?: unknown;
  }): OverviewInfo => {
  switch (action.type) {
    case 'OVERVIEW_WALLET_INFO': {
      return { serachFetched : false };
    }
    case 'OVERVIEW_WALLET_INFO_SUCCESS': {
      console.log(state, action.payload)
      return {
        ...state,
        serachFetched: true,
        data: action.payload.data
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}