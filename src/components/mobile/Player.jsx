import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faIdCard } from '@fortawesome/free-regular-svg-icons';



function Player({player}) {
    const {first, last} = player;
    return (
        <div className='player-container-mob'>
            <div className='px-1'>
            <FontAwesomeIcon className='cursor-pointer' icon={faIdCard} />
            </div>
            <div>{first}&nbsp;{last}</div>
        </div>
    );
}

export default Player;