import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Router from "./Router";

import Home from "views/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
