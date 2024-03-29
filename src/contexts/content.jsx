import * as React from "react";

const ContentContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setContent": {
      return { content: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ContentProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, { content: "unknown" });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

function useContent() {
  const context = React.useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a ContentMobProvider");
  }
  return context;
}

export { ContentProvider, useContent };
