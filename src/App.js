import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { dynamicScreen } from "utils/lazy";
import CRT from "components/CRT/Kasmar";

import Welcome from "components/screens/Welcome/Welcome";

function App() {
  return (
    <CRT>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/menu" component={dynamicScreen("Menu", { prefetch: true })} />
          <Route exact path="/options" component={dynamicScreen("Options", { prefetch: true })} />
          <Route exact path="/credits" component={dynamicScreen("Credits")} />
          <Route path="/leaderboard" component={dynamicScreen("Leaderboard", { prefetch: true })} />
          <Route path="/play" component={dynamicScreen("Gameplay", { prefetch: true })} />
          <Route path="/winner" component={dynamicScreen("GameoverWinner")} />
          <Route path="/loser" component={dynamicScreen("GameoverLoser", { prefetch: true })} />
          <Route component={dynamicScreen("NotFound")} />
        </Switch>
      </Router>
    </CRT>
  );
}

export default App;
