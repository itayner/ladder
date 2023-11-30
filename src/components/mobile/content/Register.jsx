import React, { useState } from "react";
import * as Yup from "yup";

import { useRegContext } from "../../../contexts/reg";
import { useNavigate } from "react-router-dom";

import MyButton from "../../MyButton";

function Register(props) {
  const { state: regState, dispatch: regDispatch } = useRegContext();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [personalError, setPersonalError] = useState("");
  const [childNum, setChildNum] = useState(1);
  const [sportError, setSportError] = useState(false);

  const navigate = useNavigate();

  const {
    sportDetail: { pbFlag, pbSkill, tennisFlag, tennisSkill },
  } = regState;

  const validationSchema = Yup.object({
    first: Yup.string().required().min(2).label("First name"),
    last: Yup.string().required().min(2).label("Last name"),
    email: Yup.string().email().required().label("Email"),
    password1: Yup.string().required().min(3).label("Password"),
    password2: Yup.string()
      .required()
      .oneOf([Yup.ref("password1")], "Passwords do not match")
      .label("Password"),
    //.min(3, 'Password is too short - should be 3 chars minimum.'),
    //.matches(/[0-9]/, 'Password must contain #')
    //.matches(/[a-z]/, 'Password must contain lowercase letter')
    //.matches(/[A-Z]/, 'Password must contain uppercase letter'),
    //password2: Yup.string().required().oneOf([Yup.ref("password1")], "Passwords do not match"),
  });

  const onNextClick = async () => {
    //when error, returns promise with body that is ValidationError
    const res = await validationSchema
      .validate({
        first,
        last,
        email,
        password1,
        password2,
      })
      .catch((e) => {
        return e;
      });
    if (res.errors) setPersonalError(res.errors[0]);
    else {
      regDispatch({
        type: "updatePersonalDetail",
        payload: { first, last, email, phone, password: password1 },
      });
      //Make http req to server
      setChildNum(2);
    }
  };
  const onChangeSport = (sportFlag) => (e) => {
    if (e.target.checked) setSportError(false);
    else
      !regState.sportDetail.pbFlag || !regState.sportDetail.tennisFlag
        ? setSportError(true)
        : null;
    let p = { ...regState.sportDetail };
    p[sportFlag] = e.target.checked;
    regDispatch({
      type: "updateSportDetail",
      payload: p,
    });
    //setF(e.target.checked);
  };
  const onChangeSkill = (name, level) => (e) => {
    let p = { ...regState.sportDetail };
    p[name] = level;
    regDispatch({
      type: "updateSportDetail",
      payload: p,
    });
    //setF(level);
  };
  const onMobileSubmit = () => {
    if (sportError) return;
    console.log("Registering new user!!!");
    //make call to server to register new user
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        {childNum === 1 && (
          <div name="register-personal" className="register-personal">
            <div className="register-personal-container">
              <div className="margin-top-bottom">
                <div>
                  <input
                    name="first"
                    type="text"
                    placeholder="first"
                    onChange={(e) => setFirst(e.target.value)}
                    value={first}
                  />
                </div>
                <input
                  name="last"
                  type="text"
                  placeholder="last"
                  onChange={(e) => setLast(e.target.value)}
                  value={last}
                />
              </div>
              <div className="margin-top-bottom">
                <input
                  name="emaill"
                  type="text"
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    return;
                  }}
                  value={email}
                />
              </div>
              <div className="margin-top-bottom">
                <div>
                  <input
                    name="password1"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1}
                  />
                </div>
                <input
                  name="password2"
                  type="password"
                  placeholder="confirm password"
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                />
                {personalError && <div>{personalError}</div>}
              </div>
              <div
                className="margin-top-bottom next-button-container"
                style={{
                  width: "100%",
                  height: "40px",
                }}
              >
                <MyButton
                  text="Next"
                  width="40px"
                  height="30px"
                  overrideAbsPos={true}
                  onClick={onNextClick}
                />
              </div>
            </div>
          </div>
        )}
        {childNum === 2 && (
          <div name="register-sport">
            <div className="register-sport-container">
              <div className="register-sport-wrapper">
                {sportError && <div>Must select at least one sport</div>}
                <div name="pb-container">
                  <div>
                    <input
                      type="checkbox"
                      value=""
                      name="pbCheckbox"
                      onChange={onChangeSport("pbFlag")}
                      checked={pbFlag}
                    />
                    <label htmlFor="pbCheckbox" className="ms-2">
                      Pickle Ball
                    </label>
                  </div>
                  <div className="mb-2 justify-center">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pbBeg"
                          value="Beg"
                          checked={pbSkill === "Beg"}
                          onChange={onChangeSkill("pbSkill", "Beg")}
                          disabled={!pbFlag}
                        />
                        <label className="form-check-label" htmlFor="pbBeg">
                          Beginner
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pbInt"
                          value="Int"
                          checked={pbSkill === "Int"}
                          onChange={onChangeSkill("pbSkill", "Int")}
                          disabled={!pbFlag}
                        />
                        <label className="form-check-label" htmlFor="pbInt">
                          Intermediate
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pbAdv"
                          value="Adv"
                          checked={pbSkill === "Adv"}
                          onChange={onChangeSkill("pbSkill", "Adv")}
                          disabled={!pbFlag}
                        />
                        <label className="form-check-label" htmlFor="pbAdv">
                          Advanced
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div name="tennis-container">
                  <div>
                    <input
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked={tennisFlag}
                      onChange={onChangeSport("tennisFlag")}
                    />
                    <label className="ms-2" htmlFor="flexCheckChecked">
                      Tennis
                    </label>
                  </div>

                  <div className="mb-2 justify-center">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="tennisBeg"
                          value="Beg"
                          checked={tennisSkill === "Beg"}
                          onChange={onChangeSkill("tennisSkill", "Beg")}
                          disabled={!tennisFlag}
                        />
                        <label className="form-check-label" htmlFor="tennisBeg">
                          Beginner
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="tennisInt"
                          value="Int"
                          checked={tennisSkill === "Int"}
                          onChange={onChangeSkill("tennisSkill", "Int")}
                          disabled={!tennisFlag}
                        />
                        <label className="form-check-label" htmlFor="tennisAdv">
                          Intermediate
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="tennisAdv"
                          value="Adv"
                          checked={tennisSkill === "Adv"}
                          onChange={onChangeSkill("tennisSkill", "Adv")}
                          disabled={!tennisFlag}
                        />
                        <label className="form-check-label" htmlFor="tennisAdv">
                          Advanced
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    name="back-and-submit-container"
                    className="button-container mt-4"
                  >
                    <MyButton
                      width={40}
                      height={30}
                      text="Back"
                      overrideAbsPos={true}
                      onClick={() => setChildNum(1)}
                    />
                    <MyButton
                      width={60}
                      height={30}
                      text="Submit"
                      overrideAbsPos={true}
                      onClick={onMobileSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
