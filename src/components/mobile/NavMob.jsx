import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { useNavigate, useLocation } from "react-router-dom";

import { useNavDropdownMob } from "../../contexts/navDropdownMob";
import { useContentMob } from "../../contexts/contentMob";
import { usePlayerPopupMob } from "../../contexts/playerPopupMob";

import "../../../src/styles.css";
import "../../../src/responsive.css";

function NavMob(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const { state, dispatch: contentDispatch } = useContentMob();
  const { dispatch: navMenuDispatcher } = useNavDropdownMob();
  const { state: ppState, dispatch: ppDispatcher } = usePlayerPopupMob();

  const onMenuClick = (e) => {
    navMenuDispatcher({ type: "toggle" });
  };
  const onClick = () => {
    if (ppState.visible) ppDispatcher({ type: "hidePlayerPopup" });
  };

  const content = state.content;

  const onFilterButtonClick = () => {
    contentDispatch({ type: "setContent", payload: "filter" });
    navigate("/filter");
  };

  useEffect(() => {
    const path = location.pathname;
    console.log(path);
    if (path !== "/ladder")
      contentDispatch({ type: "setContent", payload: "notLadder" });
  }, []);

  return (
    <div className="nav-mob-container" onClick={onClick}>
      <div className="nav-mob-wrapper">
        <button
          onClick={onFilterButtonClick}
          className="btn btn-dark btn-sm m-1 filter-button-mob"
          style={{ display: `${content == "ladder" ? "block" : "none"}` }}
        >
          Filter
        </button>
        <div className="menu-icon-wrapper-mob">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBars}
            onClick={onMenuClick}
          />
        </div>
      </div>
    </div>
  );
}

export default NavMob;
