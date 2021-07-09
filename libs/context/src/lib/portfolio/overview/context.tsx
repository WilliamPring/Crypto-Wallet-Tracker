import { CoinsProps } from '@crypto-wallet-tracker/props';
import { createContext, useMemo, useReducer } from 'react';
import { overviewReducer } from '.';
export const OverviewContext = createContext(null);

export const OverviewProvider = (props) => {
  const [state, dispatch] = useReducer(overviewReducer, {
    serachFetched: false,
  });
  const value = useMemo(() => [state, dispatch], [state]);
  return <OverviewContext.Provider value={value} {...props} />;
};
