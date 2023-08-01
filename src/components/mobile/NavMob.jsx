import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

import { useNavDropdownMob } from '../../contexts/navDropdownMob';
import { useContentMob } from '../../contexts/contentMob';
import { usePlayerPopupMob } from '../../contexts/playerPopupMob';

import '../../../src/styles.css';
import '../../../src/responsive.css'

function NavMob(props) {
    const navigate = useNavigate();

    const {state, dispatch: contentDispatch} = useContentMob();
    const {dispatch : navMenuDispatcher} = useNavDropdownMob();
    const {state: ppState ,dispatch : ppDispatcher} = usePlayerPopupMob();

    const onMenuClick = (e) => {
        navMenuDispatcher({type: 'toggle'});
    }
    const onClick = () => {
        if (ppState.visible)
            ppDispatcher({type: 'hidePlayerPopup'});
    }

    const content = state.content;

    const onFilterButtonClick = () => {
        contentDispatch({type: 'setContent', payload: 'filter'});
        navigate('/filter');
    };

    return (


        <div className='nav-mob-container' onClick={onClick}>
            <div className='nav-mob-wrapper'>
            <button onClick={onFilterButtonClick} className="btn btn-dark btn-sm m-1 filter-button-mob" style={{display: `${content=='ladder' ? 'block' : 'none'}`}}>Filter</button>
                <div className='menu-icon-wrapper-mob'>
                    

<FontAwesomeIcon className='cursor-pointer' icon={faBars} onClick={onMenuClick} />
                    
                    
                </div>
            </div>
        </div>
    );
}

export default NavMob;