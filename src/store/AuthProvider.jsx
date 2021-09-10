import React, { useState } from 'react';

export const AuthContext = React.createContext({
  token: localStorage.getItem('Token'),
  userEmail: localStorage.getItem('Email'),
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  //infered value - apskaiciuojama priklausoma reiksme
  const isLoggedIn = !!token;

  function loginHandler(token, userData) {
    setToken(token);
    setUserInfo(userData);
    localStorage.setItem('Token', token);
    localStorage.setItem('Email', userData.email);
  }
  function logoutHandler() {
    setToken('');
    setUserInfo({});
    console.log('logged out');
    localStorage.removeItem('Token');
    localStorage.removeItem('Email');
  }

  const ctx = {
    token,
    isLoggedIn,
    userEmail: userInfo.email,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
