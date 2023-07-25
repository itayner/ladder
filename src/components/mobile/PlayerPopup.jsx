import React from 'react';
import { usePlayerPopupMob } from '../../contexts/playerPopupMob';

function PlayerPopup(props) {
    const {state} = usePlayerPopupMob();
    console.log(state);
    const{first, last, email, phone, id} = state.player;

    const onClick = (e) => {e.stopPropagation();};
    return (
        <div className='player-popup-container-mob' style={{display: `${state.visible ? 'block' : 'none'}`}} onClick={onClick}>
            <div className='player-popup-wrapper-mob'>
                <div>{first}&nbsp;{last}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{id}</div>
            </div>
        </div>
    );
}

export default PlayerPopup;