import React from "react";
import "./SystemaAssoult.scss";

class CRT extends React.Component {
  render() {
    return (
      <div className="noisy">
        <div className="frame">
          <div className={`piece output`}>
            <div className="main-container">{this.props.children}</div>
            <div className="piece scanlines noclick" />
            <div className="piece glow noclick" />
          </div>
        </div>
      </div>
    );
  }
}

export default CRT;
