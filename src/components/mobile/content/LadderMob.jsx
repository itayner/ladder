import React from 'react';
import vertScroll from '../../../util/vertScroll';
import { useEffect, useState } from 'react';
import arr from '../../../util/data';
import _ from 'lodash';

import Player from '../Player';
import { useFilterContext } from '../../../contexts/filter';
import { usePlayerPopupMob } from '../../../contexts/playerPopupMob';

function LadderMob(props) {
    const [players, setPlayers] = useState([]);
    const {state: filter} = useFilterContext();
    const {state: playerPopupState ,dispatch} = usePlayerPopupMob();
    var myArr;

    const getData = async () => {
        await setTimeout(()=>{setPlayers(arr);}, 1000); 
    }


    useEffect(()=>{
        vertScroll('#ladder-mob-container');
        getData();
    }, []);

    const {gender, sport, skill} = filter;
    
    var filtered = _.filter(players, (p) => {
        if (gender !== p.gender) return false;
        const playsSport = sport === 'Tennis' ? p.tennis.doPlay : p.pickleBall.doPlay;
        if (!playsSport) return false;
        return sport === 'Tennis' ? p.tennis.skill === skill : p.pickleBall.skill === skill;
    });

    const onClick = (player) => (e) => {
        if (!playerPopupState.visible)
            dispatch({type: 'player', payload: player});
        dispatch({type: 'toggle'});
        e.stopPropagation();
    };

    return (
        <div className='ladder-mob-container' id='ladder-mob-container'>
            <div className='ladder-mob-wrapper'>
                {
                    filtered.map(i => (
                        <Player player={i} key={i.id} onClick={onClick(i)} />
                    ))
                }
            </div>
        </div>
    );
}

export default LadderMob;