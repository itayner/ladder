import React from 'react';

function LadderDesk(props) {
    var arr = [{name:'steve perry'}, {name:'tommy jackson'}, {name:'vince roberts'}];


    return (
        <div className='ladder-desk-container'>
            <div className='ladder-desk-wrapper'>
                {
                    arr.map(i => (
                        <div key={i.name} className='ladder-desk-player'>{i.name}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default LadderDesk;