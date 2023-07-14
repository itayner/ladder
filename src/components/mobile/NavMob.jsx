import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

import { useNavDropdownMob } from '../../contexts/navDropdownMob';
import { useContentMob } from '../../contexts/contentMob';

import '../../../src/styles.css';
import '../../../src/responsive.css'

function NavMob(props) {

    const {state, dispatch: contentDispatch} = useContentMob();
    const {dispatch : visDispatch} = useNavDropdownMob();

    const onMenuClick = (e) => {
        visDispatch({type: 'toggle'});
        e.stopPropagation();
    };

    const content = state.content;

    return (


        <div className='nav-mob-container'>
            <div className='nav-mob-wrapper'>
            <button className="btn btn-dark btn-sm m-1 filter-button-mob" style={{display: `${content=='ladder' ? 'block' : 'none'}`}}>Filter</button>
                <div className='menu-icon-wrapper-mob'>
                    

<FontAwesomeIcon className='cursor-pointer' icon={faBars} onClick={onMenuClick} />
                    
                    
                </div>
            </div>
        </div>
    );
}

export default NavMob;