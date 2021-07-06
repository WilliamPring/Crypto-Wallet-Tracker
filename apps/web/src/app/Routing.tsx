import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FC } from 'react';
import { Portfolio } from './containers/portfolio/portfolio';

export const Routing: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/account">
        <Portfolio />
      </Route>
      {/* <Route path="/history"></Route> */}
    </Switch>
  </BrowserRouter>
);
