import React from 'react';

function LadderMob(props) {
    var arr = [{name:'steve perry'}, {name:'tommy jackson'}, {name:'vince roberts'}];

    return (
        <div className='ladder-mob-container'>
            <div className='ladder-mob-wrapper'>
                {
                    arr.map(i => (
                        <div className='ladder-mob-player'>{i.name}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default LadderMob;