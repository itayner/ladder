import React from "react";

function MyButton({
  text = "Click Me!!!",
  width = 10,
  height = 10,
  color = "white",
  bgColor = "black",
  pos = { top: 0, right: "none", bottom: "none", left: 0 },
  onClick,
  zIndex,
  overrideAbsPos,
}) {
  const { top, right, bottom, left } = pos;

  return (
    <div
      className="my-button-wrapper"
      style={
        !overrideAbsPos
          ? {
              width,
              height,
              color,
              top,
              right,
              bottom,
              left,
              zIndex,
            }
          : {
              position: "static",
              width,
              height,
              color,
            }
      }
      onClick={onClick}
    >
      <div className="filter-btn-target">{text}</div>
    </div>
  );
}

export default MyButton;
