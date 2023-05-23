import React from 'react';
import MaterialIcon from 'material-icons-react';

import '../../../src/styles.css';
import '../../../src/responsive.css'

function NavMob(props) {
    return (
        <div className='nav-mob-container'>
            <div className='nav-mob-wrapper'>
                <div style={{paddingRight: '10px'}}>
            <MaterialIcon icon='menu' />
                </div>
            </div>
        </div>
    );
}

export default NavMob;