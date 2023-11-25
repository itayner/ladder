import React from "react";

import { useLogin } from "../../contexts/login";

import MyButton from "../MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableTennis } from "@fortawesome/free-solid-svg-icons";

function NavDesk(props) {
  const { state: loginState, dispatch: loginDispatch } = useLogin();

  function onLoginClick() {
    console.log("login button clicked!!!");
    loginDispatch({ type: "setVisible", payload: true });
  }

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
        <MyButton
          text="Log in"
          width={60}
          height={30}
          color="white"
          bgColor="black"
          pos={{ top: "5px", left: "none", right: "15px", bottom: "none" }}
          onClick={onLoginClick}
          zIndex={3000}
        />
      </div>
    </div>
  );
}

export default NavDesk;
