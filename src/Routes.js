import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./Router";

import Home from "views/Home";
import Surah from "views/Surah";
import AyahPortion from "views/AyahPortion";

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
        <Router
          exact
          path="/ayahs/:surahNumber"
          title="Ayahs"
          component={AyahPortion}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
