import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faIdCard } from '@fortawesome/free-regular-svg-icons';



function Player({player, onClick}) {
    const {first, last} = player;


    return (
        <div className='player-container-mob' onClick={onClick}>
            <div className='px-2'>
            <FontAwesomeIcon className='cursor-pointer' icon={faIdCard} />
            </div>
            <div>{first}&nbsp;{last}</div>
        </div>
    );
}

export default Player;