import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavMob from "./NavMob";
import NavDropdownMob from "./NavDropdownMob";
import LadderMob from "./content/LadderMob";
import RegisterMob from "./content/RegisterMob";
import RegisterMob2 from "./content/RegisterMob2";
import LoginMob from "./content/LoginMob";
import FilterMob from "./content/FilterMob";

import PlayerPopup from "./PlayerPopup";

function Content(props) {
  return (
    <div className="mob-container" onClick={onClick} onMouseMove={onMouseMove}>
      <NavMob />
      <NavDropdownMob />
      <PlayerPopup />

      <Routes>
        <Route path="/ladder" element={<LadderMob />} />
        <Route path="/login" element={<LoginMob />} />
        <Route path="/register" element={<RegisterMob />} />
        <Route path="/register2" element={<RegisterMob2 />} />
        <Route path="/filter" element={<FilterMob />} />
        <Route path="/" element={<LadderMob />} />
      </Routes>
    </div>
  );
}

export default Content;
