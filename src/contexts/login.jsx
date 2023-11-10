import * as React from "react";

const LoginContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { visible: !state.visible };
    case "setVisible":
      return { visible: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
const LoginProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    visible: false,
  });
  const value = { state, dispatch };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
const useLogin = () => {
  const context = React.useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

export { LoginProvider, useLogin };
