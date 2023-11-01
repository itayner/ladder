import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableTennis } from "@fortawesome/free-solid-svg-icons";

function NavDesk(props) {
  return (
    <div className="nav-desk-container">
      <div className="nav-desk-wrapper">
        <div className="nav-desk-icon">
          <FontAwesomeIcon
            icon={faTableTennis}
            className="nav-desk-icon"
            style={{ fontSize: "32px" }}
          />
        </div>
        <div className="nav-desk-slogan">Des Moines Pickleball</div>
      </div>
    </div>
  );
}

export default NavDesk;
