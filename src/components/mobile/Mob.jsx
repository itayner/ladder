import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavMob from "./NavMob";
import NavDropdownMob from "./NavDropdownMob";
import LadderMob from "./content/LadderMob";
import RegisterMob from "./content/RegisterMob";
import RegisterMob2 from "./content/RegisterMob2";
import LoginMob from "./content/LoginMob";
import FilterMob from "./content/FilterMob";

import { useNavDropdownMob } from "../../contexts/navDropdownMob";
import { useContentMob } from "../../contexts/contentMob";
import { usePlayerPopupMob } from "../../contexts/playerPopupMob";
import { useDragContext } from "../../contexts/drag";
import PlayerPopup from "./PlayerPopup";

function Mob(props) {
  const { state: menuState, dispatch: dispatchMenuToggle } =
    useNavDropdownMob();
  const { state: playerPopupState, dispatch: dispatchPlayerToggle } =
    usePlayerPopupMob();
  const { dispatch: dispatchContent } = useContentMob();
  const { state: dragState, dispatch: dragDispatcher } = useDragContext();

  const onClick = () => {
    if (menuState.visible) dispatchMenuToggle({ type: "toggle" });
    dragDispatcher({ type: "clearPressed" });
  };
  const onMouseMove = () => {
    if (dragState.pressed) dragDispatcher({ type: "setDrag" });
  };

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

export default Mob;
