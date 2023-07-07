import * as React from 'react'

const NdmContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'toggle': {
      return {visible: !state.visible}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function NavDropdownMobProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, {visible: false})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <NdmContext.Provider value={value}>{children}</NdmContext.Provider>
}

function useNavDropdownMob() {
  const context = React.useContext(NdmContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a NavDropdownMobProvider')
  }
  return context
}

export {NavDropdownMobProvider, useNavDropdownMob}