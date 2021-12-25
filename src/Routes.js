import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./Router";

import Home from "views/Home";
import Surah from "views/Surah";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/" title="Home" component={Home} />
        <Router
          exact
          path="/surah/:surahNumber"
          title="Surah"
          component={Surah}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
