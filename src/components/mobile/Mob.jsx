import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavMob from './NavMob';
import NavDropdownMob from './NavDropdownMob';
import LadderMob from './content/LadderMob';
import RegisterMob from './content/RegisterMob/RegisterMob';
import LoginMob from './content/LoginMob';

import { useNavDropdownMob } from '../../contexts/navDropdownMob';



function Mob(props) {
    const {state, dispatch} = useNavDropdownMob();

    const onClick = () => {
        if (state.visible)
            dispatch({type: 'toggle'});
    };

    return (
        <div className='mob-container' onClick={onClick}>     
        <NavMob />
        <NavDropdownMob />
      

      <Routes>
      <Route path='/ladder' element={<LadderMob />} />
      <Route path='/login' element={<LoginMob />} />
      <Route path='/register' element={<RegisterMob />} />
      <Route path='/' element={<LadderMob />} />
      </Routes>
        </div>
    );
}

export default Mob;