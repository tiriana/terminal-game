import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { dynamicScreen } from "utils/lazy";
import Welcome from "components/screens/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/menu" component={dynamicScreen("Menu", { prefetch: true })} />
        <Route path="/options" component={dynamicScreen("Options", { prefetch: true })} />
        <Route path="/credits" component={dynamicScreen("Credits")} />
        <Route path="/leaderboard" component={dynamicScreen("Leaderboard", { prefetch: true })} />
        <Route path="/play" component={dynamicScreen("Gameplay", { prefetch: true })} />
        <Route path="/lobby" component={dynamicScreen("Lobby", { prefetch: true })} />
        <Route path="/winner" component={dynamicScreen("GameoverWinner")} />
        <Route path="/loser" component={dynamicScreen("GameoverLoser", { prefetch: true })} />
        <Route component={dynamicScreen("NotFound")} />
      </Switch>
    </Router>
  );
}

export default App;
