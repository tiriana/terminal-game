import "reset-css";
import "App.css";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { dynamicScreen } from "utils/lazy";
import CRT from "components/CRT/Kasmar";

import { AnimatedSwitch } from "react-router-transition";

import Welcome from "components/screens/Welcome/Welcome";

const MySwitch = ({ children }) => (
  <AnimatedSwitch wrapperComponent={false} atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
    {children}
  </AnimatedSwitch>
);

// document.body.addEventListener("keydown", console.log);

function App() {
  return (
    <CRT>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/menu" component={dynamicScreen("Menu", { prefetch: true })} />
          <Route path="/options" component={dynamicScreen("Options", { prefetch: true })} />
          <Route path="/credits" component={dynamicScreen("Credits")} />
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
