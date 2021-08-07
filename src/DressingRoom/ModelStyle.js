import React, { memo } from 'react'
import { ItemTransition } from './ItemTransition';

function ModelStyle(props) {
    //const { className, url } = props;
    const { className, url } = props;

    return (
        // <div>
        //     <ItemTransition item={props} />
            // <div className={className} style={{ background: `url(${url})` }} />
            <div className={className} style={{ background: `` }} />

        // </div>
    )
}

export default memo(ModelStyle);
