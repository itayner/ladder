import React from "react";

function RegisterMob2(props) {
  return (
    <div className="reg-mob2-container">
      <div className="reg-mob2-wrapper">
        <div className="mb-2 reg-mob2-sport">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              name="pbCheckbox"
              checked
            />
            <label class="form-check-label" for="pbCheckbox">
              Pickle Ball
            </label>
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pbBeg"
                value="option1"
              />
              <label class="form-check-label" for="pbBeg">
                Beginner
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pbInt"
                value="option1"
                checked
              />
              <label class="form-check-label" for="pbInt">
                Intermediate
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="pbAdv"
                value="option1"
              />
              <label class="form-check-label" for="pbAdv">
                Advanced
              </label>
            </div>
          </div>
        </div>
        <div className="mb-2 reg-mob2-sport">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Tennis
            </label>
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tennisBeg"
                value="option1"
              />
              <label class="form-check-label" for="tennisBeg">
                Beginner
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tennisInt"
                value="option1"
                checked
              />
              <label class="form-check-label" for="tennisAdv">
                Intermediate
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="tennisAdv"
                value="option1"
              />
              <label class="form-check-label" for="tennisAdv">
                Advanced
              </label>
            </div>
          </div>
        </div>
        <div className="reg-mob2-btn-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterMob2;
