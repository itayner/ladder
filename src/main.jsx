import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { IsMobileProvider } from "./contexts/isMobile";
import { NavDropdownMobProvider } from "./contexts/navDropdownMob";
import { DragProvider } from "./contexts/drag";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <IsMobileProvider>
        <NavDropdownMobProvider>
          <DragProvider>
            <App />
          </DragProvider>
        </NavDropdownMobProvider>
      </IsMobileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
