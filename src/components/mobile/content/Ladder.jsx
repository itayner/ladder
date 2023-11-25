import React from "react";
import addVertDragScroll from "../../../util/vertScroll";
import { useEffect, useState } from "react";
import arr from "../../../util/data";
import _ from "lodash";
import $ from "jquery";

import Player from "../Player";
import { useFilterContext } from "../../../contexts/filter";
import { usePlayerPopupMob } from "../../../contexts/playerPopupMob";
import { useDragContext } from "../../../contexts/drag";
import PlayerPopup from "../PlayerPopup";

function Ladder(props) {
  const [players, setPlayers] = useState([]);
  const { state: filter } = useFilterContext();
  const { state: playerPopupState, dispatch: ppDispatcher } =
    usePlayerPopupMob();
  const { state: dragState, dispatch: dragDispatcher } = useDragContext();
  var myArr;

  const getData = async () => {
    await setTimeout(() => {
      setPlayers(arr);
    }, 1000);
  };

  useEffect(() => {
    const removeVertDragScroll = addVertDragScroll("#ladder-container");
    getData();
    return () => removeVertDragScroll();
  }, []);

  const { gender, sport, skill } = filter;

  var filtered = _.filter(players, (p) => {
    if (gender !== p.gender) return false;
    const playsSport =
      sport === "Tennis" ? p.tennis.doPlay : p.pickleBall.doPlay;
    if (!playsSport) return false;
    return sport === "Tennis"
      ? p.tennis.skill === skill
      : p.pickleBall.skill === skill;
  });

  const onClick = (player) => (e) => {
    if (!dragState.drag) {
      if (!playerPopupState.visible) {
        const elem = document.getElementById("ladder-container");
        const isMobile = elem.offsetTop > 0; //implies whether width is greater than 576 => mobile vs desk
        let top = 10;
        let left = 5;
        if (elem.offsetHeight < 150) {
          console.log("offsetHeight less than 200!!!");
          e.preventDefault();
          return;
        }
        if (isMobile) {
          if (e.pageY + 150 > elem.offsetTop + elem.offsetHeight)
            top = elem.offsetTop + 10;
          else top = e.pageY - 40;
        } else {
          if (40 + elem.offsetHeight - e.pageY < 150) top = 10;
          else top = e.pageY - 80;
          const elem2 = document.getElementById("main-panel");
          left = elem2.offsetLeft + 10;
        }
        console.log(
          `offsetTop: ${elem.offsetTop}, offsetHeight: ${elem.offsetHeight}, e.pageY: ${e.pageY}`
        );
        ppDispatcher({
          type: "setPlayerPopup",
          payload: { player, top, left },
        });
        e.stopPropagation();
      } else {
        console.log("hidePlayerPopup called!!!");
        ppDispatcher({ type: "hidePlayerPopup" });
      }
    }
  };

  return (
    <div className="ladder-container" id="ladder-container">
      <div className="ladder-wrapper">
        {filtered.map((i) => (
          <Player player={i} key={i.id} onClick={onClick(i)} />
        ))}
      </div>
    </div>
  );
}

export default Ladder;
