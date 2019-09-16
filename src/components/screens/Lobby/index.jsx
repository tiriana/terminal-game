import React, { useEffect, useState } from "react";
import { ScreenCentered, Background } from "components/screens/Screen/Screen";
import { BigText } from "components/Text/Text";
import styles from "./Lobby.module.scss";
import { useAppContext } from "appContext";
import NameInput from "_OLD/components/NameInput"; // TODO rewrite to new architecture
import api from "api";

export default props => {
  const { setError, setLoading, setSession } = useAppContext();

  const onNameEntered = playerName => {
    setLoading(true);
    api
      .createSession({ playerName })
      .then(setSession)
      .catch(error => {
        if (error.response.status === 400) {
          return setError(error.response.data.errorDesc);
        }
        throw error;
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Background />
      <ScreenCentered>
        <BigText>Podaj imię:</BigText>
        <BigText>
          <NameInput
            onKeyPressed={() => setError("")}
            onEscapePress={() => props.history.push("/menu")}
            onEnter={onNameEntered}
          />
        </BigText>
      </ScreenCentered>
    </>
  );
};
