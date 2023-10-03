import React from "react";

function FilterButton({ width, height, color }) {
  return (
    <div className="filter-btn-wrapper" style={{ width, height, color }}>
      <div className="filter-btn-target">Filter</div>
    </div>
  );
}

export default FilterButton;
