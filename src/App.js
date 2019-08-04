import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { dynamicScreen } from "./utils/lazy";

import Welcome from "./components/screens/Welcome/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/menu" component={dynamicScreen("Menu", { prefetch: true })} />
        <Route exact path="/options" component={dynamicScreen("Options")} />
        <Route exact path="/credits" component={dynamicScreen("Credits")} />
        <Route path="/leaderboard" component={dynamicScreen("Leaderboard", { prefetch: true })} />
        <Route path="/play" component={dynamicScreen("Gameplay")} />
        <Route path="/winner" component={dynamicScreen("GameoverWinner")} />
        <Route path="/loser" component={dynamicScreen("GameoverLoser")} />
        <Route component={dynamicScreen("NotFound")} />
      </Switch>
    </Router>
  );
}

export default App;
