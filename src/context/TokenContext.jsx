import React, { useState, useEffect, createContext } from "react";

const TokenContext = createContext();
function TokenContextProvider({ children }) {
  const [token, setToken] = useState({});

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    //   dispatch({type:"SET_TOKEN", payload:token})
    setToken(token);
  }, []);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <TokenContext.Provider value={[token, setToken]}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContextProvider;
export { TokenContext };
