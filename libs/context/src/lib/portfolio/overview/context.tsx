//@ts-nocheck

import { CoinsProps } from '@crypto-wallet-tracker/props';
import { createContext, useMemo, useReducer, ReactNode } from 'react';
import { overviewReducer } from '.';
import { OverviewInfo } from '.';

export type Action =
  | { type: 'OVERVIEW_WALLET_INFO' }
  | { type: 'OVERVIEW_WALLET_INFO_SUCCESS' }
  | { type: 'WALLET_INFO' }
  | { type: 'WALLET_INFO_SUCCESS' };
type Dispatch = (action: { type: string; payload?: unknown }) => void;
type State = { data: Array<CoinsProps>; serachFetched: boolean };
type CountProviderProps = { children: ReactNode };

// export const OverviewContext = createContext(null);

export const OverviewContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);
export const OverviewProvider = (props) => {
  console.log(props);
  const [state, dispatch] = useReducer(overviewReducer, {
    serachFetched: false,
  });
  const value = useMemo(() => [state, dispatch], [state]);
  return <OverviewContext.Provider value={value} {...props} />;
};
