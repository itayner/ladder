import React, { useContext, createContext } from "react";

const RegContext = createContext();

function reducer(state, action) {
  console.log("reducer called!!!");
  switch (action.type) {
    case "updateSportDetail":
      return {
        personalDetail: { ...state.personalDetail },
        sportDetail: action.payload,
      };
    case "updatePersonalDetail":
      return {
        personalDetail: action.payload,
        sportDetail: { ...state.sportDetail },
      };
    default:
      throw new Error(
        `RegContext reducer does not have action type ${action.type}!!!`
      );
  }
}
function RegContextProvider({ children }) {
  const init = {
    personalDetail: {
      first: "",
      last: "",
      phone: "",
      email: "",
      password: "",
    },
    sportDetail: {
      pbFlag: true,
      pbSkill: "Int",
      tennisFlag: false,
      tennisSkill: "Int",
    },
  };
  const [state, dispatch] = React.useReducer(reducer, init);
  return (
    <RegContext.Provider value={{ state, dispatch }}>
      {children}
    </RegContext.Provider>
  );
}
function useRegContext() {
  const context = useContext(RegContext);
  if (context === undefined)
    throw new Error("useRegContext must be used within RegContextProvider!!!");
  return context;
}

export { RegContextProvider, useRegContext };
