import React, { useState } from "react";
import { useRegContext } from "../../../contexts/reg";

function RegisterMob2(props) {
  const { state, dispatch } = useRegContext();

  const [pbFlag, setPbFlag] = useState(true);
  const [pbSkill, setPbSkill] = useState("Int");
  const [tennisFlag, setTennisFlag] = useState(false);
  const [tennisSkill, setTennisSkill] = useState("Int");
  const [error, setError] = useState(false);

  const onChangeSport = (name, setF) => (e) => {
    if (e.target.checked) setError(false);
    setF(e.target.checked);
    dispatch({
      type: "updateSportDetail",
      payload: { ...state.sportDetail, name: e.target.checked },
    });
  };
  const onChange = (name, setF, val) => (e) => {
    setF(val);
    dispatch({
      type: "updateSportDetail",
      payload: { ...state.sportDetail, name: e.target.checked },
    });
  };
  const onSubmit = () => {
    console.log("Registering new user!!!");
    if (!tennisFlag && !pbFlag) {
      setError(true);
      return;
    }
    //make call to server using state from useRegContext
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
                onChange={onChange("pbSkill", setPbSkill, "Beg")}
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
                onChange={onChange("pbSkill", setPbSkill, "Int")}
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
                onChange={onChange("pbSkill", setPbSkill, "Adv")}
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
                onChange={onChange("tennisSkill", setTennisSkill, "Beg")}
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
                onChange={onChange("tennisSkill", setTennisSkill, "Int")}
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
                onChange={onChange("tennisSkill", setTennisSkill, "Adv")}
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
            <button className="btn btn-secondary">Back</button>
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
