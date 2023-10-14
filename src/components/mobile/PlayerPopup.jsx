import React from "react";
import { usePlayerPopupMob } from "../../contexts/playerPopupMob";

function PlayerPopup(props) {
  const { state } = usePlayerPopupMob();
  const { first, last, email, phone, id } = state.player;
  console.log(`state.visible: ${state.visible}`);

  const onClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="player-popup-container"
      style={{
        display: `${state.visible ? "block" : "none"}`,
        top: state.top,
      }}
      onClick={onClick}
    >
      <div className="player-popup-wrapper">
        <div>
          {first}&nbsp;{last}
        </div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{id}</div>
      </div>
      <div className="player-popup-tail" />
    </div>
  );
}

export default PlayerPopup;
