import React from "react";
import CRT from "components/CRT/SystemaAssoult";
import { AppContextProvider } from "./appContext";
import AppRouter from "components/AppRounter";
import LoadingIndicator from "components/LoadingIndicator";
import ErrorMessage from "components/ErrorMessage";

import Welcome from "components/screens/Welcome";

import { useAppContext } from "appContext";

function App() {
  return (
    <AppContextProvider>
      <CRT>
        <AppRouter />
        <LoadingIndicator />
        <ErrorMessage />
      </CRT>
    </AppContextProvider>
  );
}

export default App;
