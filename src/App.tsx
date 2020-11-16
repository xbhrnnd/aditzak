import "./App.css";
import React, { Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { GoiburuaPod } from "./components/pods/goiburua.pod";
import { HasieraScene } from "./components/scenes/hasiera.scene";
import { AditzakScene } from "./components/scenes/aditzak.scene";
import { LehenHitzaScene } from "./components/scenes/lehen-hitza.scene";
import { HoniBuruzScene } from "./components/scenes/honiburuz.scene";
import { OinaScene } from "./components/scenes/oina.scene";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Fragment>
          <GoiburuaPod />
          <Route path="/" component={HasieraScene} exact></Route>
          <Route path="/aditzak" component={AditzakScene} exact></Route>
          <Route path="/lehen-hitza" component={LehenHitzaScene} exact></Route>
          <Route path="/honiburuz" component={HoniBuruzScene} exact></Route>
          <OinaScene />
        </Fragment>
      </Switch>
    </HashRouter>
  );
}

export default App;
