import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { useContent } from "../../contexts/content";

function FilterButton({ width, height, color }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { state: contentState, dispatch: contentDispatch } = useContent();

  const filterButtonClick = () => {
    console.log("filterButton clicked!!!");
    contentDispatch({ type: "setContent", payload: "filter" });
    navigate("/filter");
  };

  return (
    <div
      className="filter-btn-wrapper"
      style={{
        width,
        height,
        color,
        display: `${contentState.content == "ladder" ? "flex" : "none"}`,
      }}
      onClick={filterButtonClick}
    >
      <div className="filter-btn-target">Filter</div>
    </div>
  );
}

export default FilterButton;
