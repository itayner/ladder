import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import NavMob from './NavMob';
import NavDropdownMob from './NavDropdownMob';
import LadderMob from './content/LadderMob';
import RegisterMob from './content/RegisterMob/RegisterMob';
import LoginMob from './content/LoginMob';
import FilterMob from './content/FilterMob';

import { useNavDropdownMob } from '../../contexts/navDropdownMob';
import { useContentMob } from '../../contexts/contentMob';



function Mob(props) {
    const {state, dispatch : dispatchMenuToggle} = useNavDropdownMob();
    const {dispatch : dispatchContent} = useContentMob();

    const onClick = () => {
        if (state.visible)
            dispatchMenuToggle({type: 'toggle'});
    };

    useEffect(() => {
        dispatchContent({type: 'setContent', payload: 'ladder'});
    }, []);

    return (
        <div className='mob-container' onClick={onClick}>     
        <NavMob />
        <NavDropdownMob />
      

      <Routes>
      <Route path='/ladder' element={<LadderMob />} />
      <Route path='/login' element={<LoginMob />} />
      <Route path='/register' element={<RegisterMob />} />
      <Route path='/filter' element={<FilterMob />} />
      <Route path='/' element={<LadderMob />} />
      </Routes>
        </div>
    );
}

export default Mob;