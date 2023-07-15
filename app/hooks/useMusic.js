'use client';
import * as React from "react";
import { useState } from "react";

const MusicContext = React.createContext();

const initState = {};
export function MusicContextProvider({ children }) {
  const [state, setState] = useState(initState);
  React.useEffect(() => {

  }, []);

  const clearState = () => {
    setState({});
  };

  const setMusicContext = (context) => {
    setState({ ...state, ...context });
  };

  return (
    <MusicContext.Provider value={{ ...state, setMusicContext }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = React.useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be within a provider");
  }
  return context;
}
