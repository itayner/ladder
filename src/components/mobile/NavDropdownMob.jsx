import React from 'react';
import { useNavDropdownMob } from '../../contexts/navDropdownMob';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContentMob } from '../../contexts/contentMob';

function NavDropdownMob(props) {

  const navigate = useNavigate();
  const {state: visState, dispatch: visDispatch} = useNavDropdownMob();
  const {dispatch: contentDispatch} = useContentMob();
  

  const onClick = (content) => (e) => {
    contentDispatch({type: 'setContent', payload: content});
    navigate('/' + content);
    visDispatch({type: 'toggle'});
    e.stopPropagation();
  }

    return (
<ul className="nav-dropdown-mob cursor-pointer" style={{display: `${visState.visible ? 'block' : 'none'}`}}>
    <li className='nav-dropdown-item' onClick={onClick('ladder')}>Ladder</li>
    <li className='nav-dropdown-item' onClick={onClick('login')}>Login</li>
    <li className='nav-dropdown-item' onClick={onClick('register')}>Register</li>
  </ul>
    );
}

export default NavDropdownMob;