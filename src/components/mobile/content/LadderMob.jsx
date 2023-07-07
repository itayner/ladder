import React from 'react';
import vertScroll from '../../../util/vertScroll';
import { useEffect } from 'react';

function LadderMob(props) {
    var arr = [{name:'steve perry'}, {name:'tommy jackson'}, {name:'vince roberts'}];
    var i = 0
    while (i < 20){
        arr.push({name:`jackie chan ${i}`});
        i++;
    }

    useEffect(()=>{
        vertScroll('#ladder-mob-container');
    }, []);

    return (
        <div className='ladder-mob-container' id='ladder-mob-container'>
            <div className='ladder-mob-wrapper'>
                {
                    arr.map(i => (
                        <div key={i.name} className='ladder-mob-player'>{i.name}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default LadderMob;