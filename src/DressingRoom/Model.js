import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import ModelBody from './ModelBody';
import ModelStyle from './ModelStyle';
import data from '../Data/Data.json';
import ItemTransition from './ItemTransition';

function Model() {
    const newStyle = useSelector(state => state.DressingRoomReducer.newStyle);

    const renderModelStyle = () => {
        return data.navPills.map((item, index) => {
            //return <ModelStyle className={newStyle[item.type].itemType} url={newStyle[item.type].url} key={index} />
            return <div key={index}>
                <ItemTransition className={newStyle[item.type].itemType} url={newStyle[item.type].url}
                    startTranslateX={newStyle[item.type].startTranslateX} startTranslateY={newStyle[item.type].startTranslateY} />
                <ModelStyle className={newStyle[item.type].itemType} url={newStyle[item.type].url}
                    startTranslateX={newStyle[item.type].startTranslateX} startTranslateY={newStyle[item.type].startTranslateY} />
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
