import { useState } from 'react'
import {Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';


import NavMob from './components/mobile/NavMob'
import NavDropdownMob from './components/mobile/NavDropdownMob'
import NavDesk from './components/desktop/NavDesk.jsx'
import LadderMob from './components/mobile/content/LadderMob'
import LadderDesk from './components/desktop/content/LadderDesk'
import RegisterMob from './components/mobile/content/RegisterMob.jsx'
import RegisterDesk from './components/desktop/content/RegisterDesk'

import { NavDropdownMobProvider } from './contexts/navDropdownMob'
import { ContentMobProvider } from './contexts/contentMob';
import { FilterProvider } from './contexts/filter';
import { PlayerPopupMobProvider } from './contexts/playerPopupMob';
import { DragProvider } from './contexts/drag';
import Mob from './components/mobile/Mob';

function App() {
  const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const myTheme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
    green: createColor('#00FF00'),
    white: createColor('#FFFFFF'),
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
              },
   secondary: {
     light: '#ff7961',
     main: '#ffffff',
     dark: '#ba000d',
     contrastText: '#000',
              },
  },
});





  return (
    <ThemeProvider theme={myTheme}>
      <FilterProvider>
    <div className="app" style={{position: 'absolute'}}>
      <NavDropdownMobProvider>
        <ContentMobProvider>
          <PlayerPopupMobProvider>
            <DragProvider>
        <Mob />
            </DragProvider>
          </PlayerPopupMobProvider>
        </ContentMobProvider>
      </NavDropdownMobProvider>


      <NavDesk />
      <RegisterDesk />
      {/*<LadderDesk /> */}
    </div>
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
