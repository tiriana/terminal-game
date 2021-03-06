import React from "react";
import OnKeydown from "../../KeyboardListener/OnKeydown";
import styles from "./leaderboard.module.scss";

class Leaderboard extends React.Component {
  skipSceneDisabled = true;

  componentWillMount() {
    setTimeout(() => {
      this.skipSceneDisabled = false;
    }, 5000);
  }
  callback = e => {
    if (!this.skipSceneDisabled) {
      this.props.onAnyKeyPressed();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.scoreTitle}>TABLICA WYNIKÓW</div>
        <div className="regular-text">
          <ol className={styles.wrapper}>
            {this.props.leaderBoard.map((playerScore, index) => {
              return (
                <li key={index} className={styles.clear}>
                  <span className={styles.playerName}>
                    {playerScore.playerName + " (ID:" + playerScore.playerId + ")"}
                  </span>{" "}
                  <span className={styles.playerScore}> {"LICZBA PUNKTÓW: " + playerScore.result}</span>
                </li>
              );
            })}
          </ol>

          <OnKeydown callback={this.callback} />
        </div>
      </React.Fragment>
    );
  }
}

export default Leaderboard;
