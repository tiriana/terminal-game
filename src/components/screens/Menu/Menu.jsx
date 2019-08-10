import React, { useEffect, useState } from "react";
import UnderConstruction from "components/screens/UnderConstruction/UnderConstruction";
import { ScreenCentered } from "components/screens/Screen/Screen";
import { BigText } from "components/Text/Text";
import styles from "./Menu.module.scss";
import cln from "utils/classnames";
import KeyboardEventHandler, {
  KEY_ESC,
  KEY_ENTER,
  KEY_ARROW_UP,
  KEY_ARROW_DOWN,
} from "components/Input/Keyboard/KeyboardEventHandler";

const MenuItem = ({ children, active } = {}) => (
  <BigText className={cln(styles.menuItem, active ? styles.active : "")}>{children}</BigText>
);

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
      return props.history.push("/");
    }

    if (key === KEY_ENTER) {
      return props.history.push("/" + items[activeItem].goto);
    }

    const diff = key === "ArrowDown" ? 1 : -1;

    setActiveItem(activeItem => Math.max(Math.min(activeItem + diff, items.length - 1), 0));
  };

  console.log({ activeItem });

  return (
    <KeyboardEventHandler onKeyEvent={handleKey} handleKeys={[KEY_ESC, KEY_ENTER, KEY_ARROW_UP, KEY_ARROW_DOWN]}>
      <ScreenCentered>
        {items.map(({ key, getText }) => {
          return (
            <MenuItem active={items[activeItem].key === key} key={key}>
              {getText()}
            </MenuItem>
          );
        })}
      </ScreenCentered>
    </KeyboardEventHandler>
  );
};
