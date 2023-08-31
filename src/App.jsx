import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { createTheme, ThemeProvider } from "@mui/material";

import NavMob from "./components/mobile/NavMob";
import NavDropdownMob from "./components/mobile/NavDropdownMob";
import NavDesk from "./components/desktop/NavDesk.jsx";
import LadderMob from "./components/mobile/content/LadderMob";
import LadderDesk from "./components/desktop/content/LadderDesk";
import RegisterMob from "./components/mobile/content/RegisterMob.jsx";
import RegisterDesk from "./components/desktop/content/RegisterDesk";

import { NavDropdownMobProvider } from "./contexts/navDropdownMob";
import { ContentMobProvider } from "./contexts/contentMob";
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
  const { onMobileClick, onMobileMouseMove } = useMobileClickAndDrag();

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
          <ContentMobProvider>
            <PlayerPopupMobProvider>
              <div className="container my-container">
                <div name="desktop-header" className="row d-none d-sm-block">
                  <div className="col desk-nav g-0"></div>
                </div>
                <div className="row body">
                  <div
                    name="desktop-side-panel"
                    className="col-3 side-panel d-none d-sm-block g-0"
                  ></div>
                  <div
                    name="main-panel"
                    className="col main-panel g-0"
                    onClick={isMobile ? onMobileClick : () => null}
                    onMouseMove={isMobile ? onMobileMouseMove : () => null}
                  >
                    <div
                      name="mobile-header-container"
                      className="d-xs-block d-sm-none"
                    >
                      <NavMob />
                    </div>
                    <div name="content-panel" className="content-panel"></div>
                    {/* Components unique to mobile */}
                    {isMobile /* && <NavDropdownMob /> && <PlayerPopup /> */}
                  </div>
                </div>
              </div>
            </PlayerPopupMobProvider>
          </ContentMobProvider>
        </RegContextProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
