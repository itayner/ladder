import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";
import { css } from "@emotion/css";

import Filter from "../mobile/content/Filter";

import { useFilterContext } from "../../contexts/filter";
import { useContent } from "../../contexts/content";
import { useIsMobileContext } from "../../contexts/isMobile";

function Sidebar(props) {
  const navigate = useNavigate();
  const { state: filter, dispatch: dFilter } = useFilterContext();
  const { state: content, dispatch: dContent } = useContent();
  const { gender, sport, skill } = filter;
  const { state: isMobileState } = useIsMobileContext();

  return (
    <div className="sidebar-container">
      {content.content === "ladder" ? (
        <Filter />
      ) : (
        <div className="sidebar-non-filter">sidebar non-filter</div>
      )}
    </div>
  );
}

export default Sidebar;
