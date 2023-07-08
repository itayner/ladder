import React from 'react';
import { useNavDropdownMob } from '../../contexts/navDropdownMob';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavDropdownMob(props) {

  const navigate = useNavigate();
  const {state} = useNavDropdownMob();

    return (
<ul className="nav-dropdown-mob cursor-pointer" style={{display: `${state.visible ? 'block' : 'none'}`}}>
    <li className='nav-dropdown-item' onClick={()=>navigate('/register')}>Register</li>
    <li className='nav-dropdown-item' onClick={()=>navigate('/ladder')}>Ladder</li>
  </ul>
    );
}

export default NavDropdownMob;