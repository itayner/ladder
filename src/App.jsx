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
import { ContentMobProvider } from './contexts/contentMob';
import Mob from './components/mobile/Mob';

function App() {

  return (
    <div className="app" style={{position: 'absolute'}}>
      <NavDropdownMobProvider>
        <ContentMobProvider>
        <Mob />
        </ContentMobProvider>
      </NavDropdownMobProvider>


      <NavDesk />
      <RegisterDesk />
      {/*<LadderDesk /> */}
    </div>
  )
}

export default App
