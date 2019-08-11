import React, { useState } from "react";
import Screen, { ScreenCentered, Background } from "components/screens/Screen/Screen";
import { BigText } from "components/Text/Text";
import Countdown from "components/Clock/Countdown";
import UnderConstruction from "components/screens/UnderConstruction/UnderConstruction";

export default props => {
  const [countingdown, setCountingdown] = useState(true);

  const onCountDownDonw = () => setCountingdown(false);

  if (!countingdown) {
    return <UnderConstruction title="GAMEPLAY" {...props} />;
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
