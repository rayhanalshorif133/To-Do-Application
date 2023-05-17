import React, { createContext } from 'react';
export const GlobalVariableContext = createContext();

export default function GlobalVariableContextProvider(props) {
 return (
  <GlobalVariableContext.Provider value={{
   api_base_url: "http://localhost:3002/",
  }}>
   {props.children}
  </GlobalVariableContext.Provider>
 );
}
