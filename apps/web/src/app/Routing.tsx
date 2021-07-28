import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FC } from 'react';
import { Portfolio } from './containers/portfolio/portfolio';
import { Nav } from './Nav/Nav';

export const Routing: FC = () => (
  <BrowserRouter>
    <Switch>
      <Nav>
        <Route exact path="/"></Route>
        <Route path="/account">
          <Portfolio />
        </Route>
        {/* <Route path="/history"></Route> */}
      </Nav>
    </Switch>
  </BrowserRouter>
);
