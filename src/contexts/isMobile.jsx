import React, { createContext, useReducer, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const IsMobileContext = createContext();

const reducer = (state, action) => {
  console.log(`action: ${action}`);
  switch (action.type) {
    case "updateIsMobile":
      return { isMobile: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const IsMobileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isMobile: useMediaQuery({ query: `(max-width: 576px)` }),
  });
  return (
    <IsMobileContext.Provider value={{ state, dispatch }}>
      {children}
    </IsMobileContext.Provider>
  );
};

const useIsMobileContext = () => {
  const context = useContext(IsMobileContext);
  if (context === undefined)
    throw new Error("useIsMobileContext must be used within IsMobileProvider");
  return context;
};

export { IsMobileProvider, useIsMobileContext };
