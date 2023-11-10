import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { useNavigate, useLocation } from "react-router-dom";

import { useNavDropdownMob } from "../../contexts/navDropdownMob";
import { useContent } from "../../contexts/content";
import { usePlayerPopupMob } from "../../contexts/playerPopupMob";

import "../../../src/styles.css";
import "../../../src/responsive.css";
import FilterButton from "./FilterButton";
import MyButton from "../MyButton";

function NavMob(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const { state: contentState, dispatch: contentDispatch } = useContent();
  const { dispatch: navMenuDispatcher } = useNavDropdownMob();
  const { state: ppState, dispatch: ppDispatcher } = usePlayerPopupMob();

  const onMenuClick = (e) => {
    console.log("Nav menu icon clicked!!!");
    navMenuDispatcher({ type: "toggle" });
  };
  const onClick = () => {
    if (ppState.visible) ppDispatcher({ type: "hidePlayerPopup" });
  };
  const filterButtonClicked = () => {
    console.log("filterButton clicked!!!");
    contentDispatch({ type: "setContent", payload: "filter" });
    navigate("/filter");
  };

  useEffect(() => {
    if (contentState.content === "unknown") {
      contentDispatch({
        type: "setContent",
        payload: `${location.pathname === "/ladder" ? "ladder" : "nonLadder"}`,
      });
    }
  }, [contentState.content]);

  return (
    <div className="nav-mob-container" onClick={onClick}>
      <div className="nav-mob-wrapper">
        {contentState.content === "ladder" && (
          <MyButton
            text="Filter"
            width={50}
            height={30}
            color="white"
            bgColor="black"
            pos={{ top: "5px", left: "15px", right: "none", bottom: "none" }}
            onClick={filterButtonClicked}
          />
        )}
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
