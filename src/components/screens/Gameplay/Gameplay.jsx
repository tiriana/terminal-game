import React, { useState } from "react";
import Screen, { ScreenCentered, Background } from "components/screens/Screen/Screen";
import { BigText, SmallText } from "components/Text/Text";
import Countdown from "components/Clock/Countdown";
import UnderConstruction from "components/screens/UnderConstruction/UnderConstruction";

import GAME from "_OLD/App";

export default props => {
  const [countingdown, setCountingdown] = useState(true);

  const onCountDownDonw = () => setCountingdown(false);

  if (!countingdown) {
    return (
      <>
        <BigText>[To jest stara wersja Gry. Niedługo zostanie odświeżona. :-) ] </BigText>
        <GAME />
      </>
    );
  }

  return (
    <>
      <Background />
      <Screen>
        <Countdown onFinished={onCountDownDonw} />
      </Screen>
    </>
  );
};
