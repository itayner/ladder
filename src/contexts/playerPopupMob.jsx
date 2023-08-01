import * as React from 'react'

const PlayerPopupContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'hidePlayerPopup': {
        return {visible: false, player: {...state.player}}
      }
    case 'setPlayerPopup': {
        return {player: action.payload, visible: true}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function PlayerPopupMobProvider({children}) {
    const player = {first: 'xxxx', last: 'xxxx', email: 'xxxx', phone: 'xxxx'};
  const [state, dispatch] = React.useReducer(reducer, {visible: false, player});
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <PlayerPopupContext.Provider value={value}>{children}</PlayerPopupContext.Provider>
}

function usePlayerPopupMob() {
  const context = React.useContext(PlayerPopupContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a NavDropdownMobProvider')
  }
  return context
}

export {PlayerPopupMobProvider, usePlayerPopupMob}