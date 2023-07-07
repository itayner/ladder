import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

import { useNavDropdownMob } from '../../contexts/navDropdownMob';

import '../../../src/styles.css';
import '../../../src/responsive.css'

function NavMob(props) {

    const {state, dispatch} = useNavDropdownMob();

    const onClick = () => {
        dispatch({type: 'toggle'});
    };

    return (


        <div className='nav-mob-container'>
            <div className='nav-mob-wrapper'>
                <div style={{paddingRight: '10px'}}>
                    

<FontAwesomeIcon icon={faBars} onClick={onClick} />
                    
                    
                </div>
            </div>
        </div>
    );
}

export default NavMob;