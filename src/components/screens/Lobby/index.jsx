import React, { useEffect, useState } from "react";
import { ScreenCentered, Background } from "components/screens/Screen/Screen";
import { BigText } from "components/Text/Text";
import styles from "./Menu.module.scss";
import cln from "utils/classnames";
import KeyboardEventHandler, {
  KEY_ESC,
  KEY_ENTER,
  KEY_ARROW_UP,
  KEY_ARROW_DOWN,
} from "components/Input/Keyboard/KeyboardEventHandler";
import { OneTime as Heavy } from "components/Glitch/Heavy";

const MenuItem = ({ children, active } = {}) => {
  const item = (
    <BigText className={cln(styles.menuItem, active ? styles.active : "")}>
      {active ? <Heavy>{children}</Heavy> : children}
    </BigText>
  );

  return item;

  // return active ? <Neon>{item}</Neon> : item;
};

const items = [
  {
    key: "start",
    getText: () => "Start",
    goto: "play",
  },
  {
    key: "options",
    getText: () => "Options",
    goto: "options",
  },
  {
    key: "credits",
    getText: () => "Credits",
    goto: "credits",
  },
];

export default props => {
  const [activeItem, setActiveItem] = useState(0);

  const handleKey = key => {
    if (key === KEY_ESC) {
      return props.history.push("/menu");
    }

    // if (key === KEY_ENTER) {
    //   return props.history.push("/" + items[activeItem].goto);
    // }

    const diff = key === "ArrowDown" ? 1 : -1;

    setActiveItem(activeItem => Math.max(Math.min(activeItem + diff, items.length - 1), 0));
  };

  return (
    <>
      <ScreenCentered>
        <label>Podaj imię:</label>
        <input placeholder="Podaj swoje imię" type="text"></input>
      </ScreenCentered>
    </>
  );
};
