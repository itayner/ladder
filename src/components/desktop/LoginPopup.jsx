import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableTennis, faTimes } from "@fortawesome/free-solid-svg-icons";

import MyButton from "../MyButton";

import { useLogin } from "../../contexts/login";

function LoginPopup(props) {
  const [regHover, setRegHover] = useState(false);
  const {
    state: { visible },
    dispatch: loginDispatch,
  } = useLogin();

  const onMouseEnter = () => {
    if (!regHover) setRegHover(true);
  };
  const onMouseLeave = () => {
    setRegHover(false);
  };
  const onClose = () => {
    loginDispatch({ type: "setVisible", payload: false });
  };

  return (
    <div
      className="login-popup-container"
      style={{ display: `${visible ? "block" : "none"}` }}
    >
      <div className="login-popup-wrapper">
        <div className="login-popup-email">
          <label name="emaill">email</label>
          <input name="emaill" type="text" size="25" />
        </div>
        <div className="login-popup-password">
          <label name="password">password</label>
          <input name="password" type="password" size="25" />
        </div>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="login-popup-register"
          style={{
            color: `${regHover ? "greenyellow" : "black"}`,
          }}
        >
          Register
        </div>
        <MyButton
          text="Go"
          width={40}
          height={30}
          color="white"
          bgColor="black"
          pos={{ top: "none", left: "20px", right: "none", bottom: "10px" }}
          onClick={() => {}}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="login-popup-close"
          onClick={onClose}
        />
        <FontAwesomeIcon
          icon={faTableTennis}
          className="login-popup-paddle"
          style={{ fontSize: "32px" }}
        />
      </div>
    </div>
  );
}

export default LoginPopup;
