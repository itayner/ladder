import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";
import { css } from "@emotion/css";

import { useFilterContext } from "../../../contexts/filter";
import { useContent } from "../../../contexts/content";

function FilterMob(props) {
  const navigate = useNavigate();
  const { state: filter, dispatch: dFilter } = useFilterContext();
  const { state: content, dispatch: dContent } = useContent();
  const { gender, sport, skill } = filter;

  const onGenderClick = (e) => {
    dFilter({
      type: "setFilter",
      payload: { ...filter, gender: e.target.name },
    });
  };
  const onSportClick = (e) => {
    dFilter({
      type: "setFilter",
      payload: { ...filter, sport: e.target.name },
    });
  };
  const onSkillClick = (e) => {
    dFilter({
      type: "setFilter",
      payload: { ...filter, skill: e.target.name },
    });
  };
  const onSubmit = () => {
    dContent({ type: "setContent", payload: "ladder" });
    navigate("/ladder");
  };

  const color = "white";

  return (
    <div className="filter-mob-container">
      <div className="filter-mob-wrapper">
        <div className="filter-item">
          <ButtonGroup variant="outlined" color="secondary">
            {/*
                    <Button className={css`border-color: black !important; ${gender === 'Mens' ? 'border: 3px solid !important' : ''}`} onClick={onGenderClick} name='M'>M</Button>
                    <Button className={css`border-color: black !important; ${gender === 'Womens' ? 'border: 3px solid !important' : ''}`} onClick={onGenderClick} name='F'>F</Button>
                    */}
            <Button
              color={color}
              className={css`
                ${gender === "M" ? "border: 3px solid !important" : ""}
              `}
              onClick={onGenderClick}
              name="M"
            >
              Mens
            </Button>
            <Button
              color={color}
              className={css`
                ${gender === "W" ? "border: 3px solid !important" : ""}
              `}
              onClick={onGenderClick}
              name="W"
            >
              Womens
            </Button>
          </ButtonGroup>
        </div>
        <div className="filter-item">
          <ButtonGroup variant="outlined" color="primary">
            <Button
              color={color}
              className={css`
                ${sport === "Pickle Ball" ? "border: 3px solid !important" : ""}
              `}
              onClick={onSportClick}
              name="Pickle Ball"
            >
              Pickle Ball
            </Button>
            <Button
              color={color}
              className={css`
                ${sport === "Tennis" ? "border: 3px solid !important" : ""}
              `}
              onClick={onSportClick}
              name="Tennis"
            >
              Tennis
            </Button>
          </ButtonGroup>
        </div>
        <div className="filter-item">
          <ButtonGroup variant="outlined" color="primary">
            <Button
              color={color}
              className={css`
                ${skill === "Adv" ? "border: 3px solid !important" : ""}
              `}
              onClick={onSkillClick}
              name="Adv"
            >
              Adv
            </Button>
            <Button
              color={color}
              className={css`
                ${skill === "Int" ? "border: 3px solid !important" : ""}
              `}
              onClick={onSkillClick}
              name="Int"
            >
              Int
            </Button>
            <Button
              color={color}
              className={css`
                ${skill === "Beg" ? "border: 3px solid !important" : ""}
              `}
              onClick={onSkillClick}
              name="Beg"
            >
              Beg
            </Button>
          </ButtonGroup>
        </div>
        <div className="filter-item">
          <button onClick={onSubmit} className="btn btn-primary">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterMob;
