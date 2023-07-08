import React from 'react';
import { useNavDropdownMob } from '../../contexts/navDropdownMob';
import { Link } from 'react-router-dom';

function NavDropdownMob(props) {

  const {state} = useNavDropdownMob();

    return (
<ul className="nav-dropdown-mob cursor-pointer" style={{display: `${state.visible ? 'block' : 'none'}`}}>
    <li className='nav-dropdown-item'><Link to='/register'>Register</Link></li>
    <li className='nav-dropdown-item'><Link to='/ladder'>Ladder</Link></li>
  </ul>
    );
}

export default NavDropdownMob;