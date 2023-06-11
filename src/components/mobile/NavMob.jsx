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
                <div style={{paddingRight: '10px'}}>
                    

<FontAwesomeIcon icon={faBars} />
                    
                    
                </div>
            </div>
        </div>
    );
}

export default NavMob;