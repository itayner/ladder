import { useState } from 'react'
import {Routes, Route } from "react-router-dom";


import NavMob from './components/mobile/NavMob'
import NavDropdownMob from './components/mobile/NavDropdownMob'
import NavDesk from './components/desktop/NavDesk.jsx'
import LadderMob from './components/mobile/content/LadderMob'
import LadderDesk from './components/desktop/content/LadderDesk'
import RegisterMob from './components/mobile/content/RegisterMob/RegisterMob.jsx'
import RegisterDesk from './components/desktop/content/RegisterDesk'

import { NavDropdownMobProvider } from './contexts/navDropdownMob'

function App() {

  return (
    <div className="app" style={{position: 'absolute'}}>
      <NavDropdownMobProvider>
        <NavMob />
        <NavDropdownMob />
      </NavDropdownMobProvider>

      <Routes>
      <Route path='/ladder' element={<LadderMob />} />
      <Route path='/register' element={<RegisterMob />} />
      <Route path='/' element={<LadderMob />} />
      </Routes>

      <NavDesk />
      <RegisterDesk />
      {/*<LadderDesk /> */}
    </div>
  )
}

export default App
