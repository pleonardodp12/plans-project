import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Plans } from 'pages';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Plans} path="/plans/:sku" />
      </Switch>
    </BrowserRouter>
  );
}
