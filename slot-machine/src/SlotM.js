import React from 'react';

const SlotM = (props) => {
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;

    if ((x === y) && (y === z)) {
        return (
            <>
                <div className='slot_inner'>
                    <div>
                        {x} {y} {z}
                    </div>
                    <h1>
                        This is matching !
                    </h1>
                   
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='slot_inner'>
                    <div>
                        {x} {y} {z}
                    </div>
                    <h1>
                        This is not matching !
                    </h1>
                
                </div>
            </>
        )
    }
}

export default SlotM;
