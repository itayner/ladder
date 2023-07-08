import React from 'react';
import { useNavDropdownMob } from '../../contexts/navDropdownMob';

function NavDropdownMob(props) {

  const {state} = useNavDropdownMob();

    return (
<ul className="nav-dropdown-mob cursor-pointer" style={{display: `${state.visible ? 'block' : 'none'}`}}>
    <li className='nav-dropdown-item'>Login</li>
    <li className='nav-dropdwon-item'>Register</li>
    <li className='nav-dropdown-item'>Ladder</li>
  </ul>
    );
}

export default NavDropdownMob;