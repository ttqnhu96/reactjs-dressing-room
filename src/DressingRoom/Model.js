import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import ModelBody from './ModelBody';
import data from '../Data/Data.json';
import ModelStyle from './ModelStyle';

function Model() {
    const newStyle = useSelector(state => state.DressingRoomReducer.newStyle);

    const renderModelStyle = () => {
        return data.navPills.map((item, index) => {
            return <div key={index}>
                <ModelStyle {...newStyle[item.type]} />
            </div>
        })
    }

    return (
        <div className="contain">
            <ModelBody />
            {renderModelStyle()}
        </div>
    )
}

export default memo(Model);
