import React, { useContext } from "react";

const DragContext = React.createContext();

function reducer(state, action) {
  console.log("drag reducer called!!!");
  switch (action.type) {
    case "setDrag": {
      return { drag: true, pressed: state.pressed };
    }
    case "clearDrag": {
      return { drag: false, pressed: state.pressed };
    }
    case "setPressed": {
      return { pressed: true, drag: false };
    }
    case "clearPressed": {
      return { pressed: false, drag: false };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function DragProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    drag: false,
    pressed: false,
  });

  return (
    <DragContext.Provider value={{ state, dispatch }}>
      {children}
    </DragContext.Provider>
  );
}
function useDragContext() {
  const context = React.useContext(DragContext);
  if (context === undefined)
    throw new Error("useDragContext must be used within a DragProvider");
  return context;
}

export { DragProvider, useDragContext };
