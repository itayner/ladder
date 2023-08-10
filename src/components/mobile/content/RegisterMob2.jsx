import React, { useState, useEffect } from "react";
import { useRegContext } from "../../../contexts/reg";
import { useNavigate } from "react-router-dom";

function RegisterMob2(props) {
  const { state, dispatch } = useRegContext();
  const navigate = useNavigate();

  const { sportDetail } = state;

  /*
  useEffect(() => {
    console.log("useEffect function called!!!");
  }, [state.sportDetail.pbFlag, pbSkill, tennisFlag, tennisSkill]);
  */
  const [pbFlag, setPbFlag] = useState(sportDetail.pbFlag);
  const [pbSkill, setPbSkill] = useState(sportDetail.pbSkill);
  const [tennisFlag, setTennisFlag] = useState(sportDetail.tennisFlag);
  const [tennisSkill, setTennisSkill] = useState(sportDetail.tennisSkill);

  const [error, setError] = useState(false);

  const onChangeSport = (sportFlag, setF) => (e) => {
    if (e.target.checked) setError(false);
    let p = { ...sportDetail };
    p[sportFlag] = e.target.checked;
    dispatch({
      type: "updateSportDetail",
      payload: p,
    });
    setF(e.target.checked);
  };
  const onChangeSkill = (name, level, setF) => (e) => {
    let p = { ...sportDetail };
    p[name] = level;
    dispatch({
      type: "updateSportDetail",
      payload: p,
    });
    setF(level);
  };
  const onSubmit = () => {
    console.log("Registering new user!!!");
    console.log(state);
    if (!tennisFlag && !pbFlag) {
      setError(true);
      return;
    }
    //make call to server using state from useRegContext
  };
  const onBack = () => {
    navigate("/register2");
  };

  return (
    <div className="reg-mob2-container">
      <div className="reg-mob2-wrapper">
        <div
          style={{
            display: `${error ? "block" : "none"}`,
            color: "red",
          }}
        >
          Must select at least one sport
        </div>
        <div className="mb-2 reg-mob2-sport">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="pbCheckbox"
              onChange={onChangeSport("pbFlag", setPbFlag)}
              checked={pbFlag}
            />
            <label className="form-check-label" htmlFor="pbCheckbox">
              Pickle Ball
            </label>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pbBeg"
                value="Beg"
                checked={pbSkill === "Beg"}
                onChange={onChangeSkill("pbSkill", "Beg", setPbSkill)}
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
                onChange={onChangeSkill("pbSkill", "Int", setPbSkill)}
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
                onChange={onChangeSkill("pbSkill", "Adv", setPbSkill)}
                disabled={!pbFlag}
              />
              <label className="form-check-label" htmlFor="pbAdv">
                Advanced
              </label>
            </div>
          </div>
        </div>
        <div className="mb-2 reg-mob2-sport">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked={tennisFlag}
              onChange={onChangeSport("tennisFlag", setTennisFlag)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Tennis
            </label>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tennisBeg"
                value="Beg"
                checked={tennisSkill === "Beg"}
                onChange={onChangeSkill("tennisSkill", "Beg", setTennisSkill)}
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
                onChange={onChangeSkill("tennisSkill", "Int", setTennisSkill)}
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
                onChange={onChangeSkill("tennisSkill", "Adv", setTennisSkill)}
                disabled={!tennisFlag}
              />
              <label className="form-check-label" htmlFor="tennisAdv">
                Advanced
              </label>
            </div>
          </div>
        </div>
        <div className="reg-mob2-btn-container">
          <div className="btn-group" role="group">
            <button className="btn btn-secondary" onClick={onBack}>
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterMob2;
