import React, { useState, useMemo, useEffect } from "react";
import Router from "./02.navigation/Router";
import Footer from "./03.globals/03.Components/Footer";
import jwtDecode from "jwt-decode";
import { LoginContext } from "./02.navigation/LoginContext";

function App() {

  const [dataLogin, setDataLogin] = useState(undefined);

  const loginContextValue = useMemo(
    () => ({
      dataLogin,
      setDataLogin
    }),
    [dataLogin, setDataLogin]
  );

  useEffect(() => {
    if (!dataLogin) {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        return;
      }
      const decoded = jwtDecode(token.token);
      setDataLogin(decoded.cargo);
    }
  }, []);

  return (
    <>
      <div className="relative min-h-full">
        <LoginContext.Provider value={loginContextValue}>
          <Router />
          <Footer />
        </LoginContext.Provider>
      </div>
    </>
  )
}

export default App
