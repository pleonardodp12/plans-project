import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home } from '../pages';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Home} path="/plans/:sku" />
      </Switch>
    </BrowserRouter>
  );
}