import './portfolio.module.scss';

import { lazy, FC, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Overview = lazy(() => import('./overview/overview'));
const Wallet = lazy(() => import('./wallet/wallet'));

/* eslint-disable-next-line */
export interface PortfolioProps {
  baseName?: string;
}

export const Portfolio: FC<PortfolioProps> = ({ baseName = '' }) => {
  return (
    <div>
      <HashRouter basename={baseName}>
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            <Route path="/wallet/:walletId" component={Wallet} />
            <Route path="" component={Overview} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default Portfolio;
