import * as React from "react";

const PlayerPopupContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "hidePlayerPopup": {
      return {
        visible: false,
        player: { ...state.player },
        top: state.top,
        left: state.left,
      };
    }
    case "setPlayerPopup": {
      return {
        player: action.payload.player,
        top: action.payload.top,
        left: action.payload.left,
        visible: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlayerPopupMobProvider({ children }) {
  const player = { first: "xxxx", last: "xxxx", email: "xxxx", phone: "xxxx" };
  const [state, dispatch] = React.useReducer(reducer, {
    visible: false,
    player,
    top: 0,
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <PlayerPopupContext.Provider value={value}>
      {children}
    </PlayerPopupContext.Provider>
  );
}

function usePlayerPopupMob() {
  const context = React.useContext(PlayerPopupContext);
  if (context === undefined) {
    throw new Error(
      "usePlayerPopupMob must be used within a PlayerPopupMobProvider!!!"
    );
  }
  return context;
}

export { PlayerPopupMobProvider, usePlayerPopupMob };
