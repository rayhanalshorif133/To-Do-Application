import React, { createContext } from 'react';

export const CheckLoginContext = createContext();

const isLogin = () => {
 const token = sessionStorage.getItem('token');
 if (token) {
  return true;
 }
 return false;
}

export default function CheckLoginContextProvider(props) {
 return (
  <CheckLoginContext.Provider value={{
   isLogin: isLogin(),
   token: sessionStorage.getItem('token')
  }}>
   {props.children}
  </CheckLoginContext.Provider>
 )
}

