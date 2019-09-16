import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [session, setSession] = useState({});

  const value = {
    loading,
    setLoading,
    error,
    setError,
  };
  return <AppContext.Provider value={value} {...{ children }} />;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
