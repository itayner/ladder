import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider } from "@mui/material";

import "../src/stylesResp.css";

import NavMob from "./components/mobile/NavMob";
import NavDropdownMob from "./components/mobile/NavDropdownMob";
import NavDesk from "./components/desktop/NavDesk.jsx";
import Ladder from "./components/mobile/content/Ladder";
import LadderDesk from "./components/desktop/content/LadderDesk";
import RegisterMob from "./components/mobile/content/RegisterMob.jsx";
import RegisterDesk from "./components/desktop/content/RegisterDesk";
import PlayerPopup from "./components/mobile/PlayerPopup";
import FilterMob from "./components/mobile/content/FilterMob";
import Sidebar from "./components/desktop/Sidebar";

import { NavDropdownMobProvider } from "./contexts/navDropdownMob";
import { ContentProvider } from "./contexts/content";
import { FilterProvider } from "./contexts/filter";
import { PlayerPopupMobProvider } from "./contexts/playerPopupMob";
import { DragProvider } from "./contexts/drag";
import { RegContextProvider } from "./contexts/reg";
import Content from "./components/mobile/Content";

import useResizeListening from "./hooks/useResizeListening";
import useMobileClickAndDrag from "./hooks/useMobileClickAndDrag";

import { useIsMobileContext } from "./contexts/isMobile";

function App() {
  const {
    state: { isMobile },
  } = useIsMobileContext();
  useResizeListening();
  //const { onMobileClick, onMobileMouseMove } = useMobileClickAndDrag();

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const myTheme = createTheme({
    palette: {
      anger: createColor("#F40B27"),
      apple: createColor("#5DBA40"),
      steelBlue: createColor("#5C76B7"),
      violet: createColor("#BC00A3"),
      green: createColor("#00FF00"),
      white: createColor("#FFFFFF"),
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#ffffff",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <FilterProvider>
        <RegContextProvider>
          <ContentProvider>
            <PlayerPopupMobProvider>
              <div className="my-container">
                <div className="desk-nav"></div>
                <div className="test"></div>
                <PlayerPopup />

                <div className="my-body">
                  <div name="desktop-side-panel" className="side-panel">
                    <Sidebar />
                  </div>
                  <div id="main-panel" name="main-panel" className="main-panel">
                    <div
                      name="mobile-header-container"
                      className="d-xs-block d-sm-none mobile-header-container"
                    >
                      <NavMob />
                    </div>
                    <div
                      name="content-panel"
                      className="content-panel content-resp"
                    >
                      <Routes>
                        <Route path="/ladder" element={<Ladder />} />
                        <Route path="/filter" element={<FilterMob />} />
                        {/*
                        <Route path="/login" element={<LoginMob />} />
                        <Route path="/register" element={<RegisterMob />} />
                        <Route path="/register2" element={<RegisterMob2 />} />
                        <Route path="/filter" element={<FilterMob />} />
                        <Route path="/" element={<LadderMob />} />
                      */}
                      </Routes>
                    </div>
                    {/* Components unique to mobile */}
                    {isMobile && <NavDropdownMob />}
                  </div>
                </div>
              </div>
            </PlayerPopupMobProvider>
          </ContentProvider>
        </RegContextProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
