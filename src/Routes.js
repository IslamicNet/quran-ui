import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./Router";

import Home from "views/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/" title="Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
