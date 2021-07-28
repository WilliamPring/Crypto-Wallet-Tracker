export const OVERVIEW_WALLET_INFO = 'OVERVIEW_WALLET_INFO'
export const OVERVIEW_WALLET_INFO_SUCCESS = 'OVERVIEW_WALLET_INFO_SUCCESS'
export const WALLET_INFO = 'WALLET_INFO'
export const WALLET_INFO_SUCCESS = 'WALLET_INFO_SUCCESS'


type OverviewData =  {
  name: string;
  ticketName: string;
  url: string;
  imageUrl: string;
  userCoinWalletSummary: {
    addressCount: number;
    totalAmount: number;
    id: number;
  }
}


export interface OverviewInfo {
    data?: Array<OverviewData>;
    serachFetched?: boolean;
    serachError?: unknown;
    selectedWalletId?: number;
}