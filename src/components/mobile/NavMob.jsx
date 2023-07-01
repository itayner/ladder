import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faBars } from '@fortawesome/free-solid-svg-icons'



import '../../../src/styles.css';
import '../../../src/responsive.css'

function NavMob(props) {
    const [expanded, setExpanded] = useState(false);

    const onMenuIconClick = () => setExpanded(!expanded);

    return (


        <div className='nav-mob-container'>
            <div className='nav-mob-wrapper'>
                <div className='dropdown' style={{paddingRight: '10px'}}>
                    

<FontAwesomeIcon data-bs-toggle='dropdown' icon={faBars} />
<ul class="dropdown-menu" style={{zIndex: 10}}>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default NavMob;