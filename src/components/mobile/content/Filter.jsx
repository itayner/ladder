import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";
import { css } from "@emotion/css";

import background from "../../../img/pickleBall2.jpg";

import { Button as BTN } from "flowbite-react";

import { useFilterContext } from "../../../contexts/filter";
import { useContent } from "../../../contexts/content";
import { useIsMobileContext } from "../../../contexts/isMobile";

function Filter(props) {
  const navigate = useNavigate();
  const { state: filter, dispatch: dFilter } = useFilterContext();
  const {
    state: { content },
    dispatch: dContent,
  } = useContent();
  const {
    state: { isMobile },
    dispatch: dIsMobile,
  } = useIsMobileContext();
  const { gender, sport, skill } = filter;

  useEffect(() => {
    console.log(`in useEffect: isMobile=${isMobile} content=${content}`);
    if (!isMobile && content === "filter") {
      navigate("/ladder");
      dContent({ type: "setContent", payload: "ladder" });
    }
  }, [isMobile]);
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
    <div
      className="filter-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="filter-wrapper">
        {/*         
        <BTN gradientDuoTone="purpleToPink">Hi</BTN>
        */}

        <div className="filter-item">
          {/*           
          <BTN gradientMonochrome="purple">Hi!!!!</BTN>
          */}
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

export default Filter;
