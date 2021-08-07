import React from 'react'
//import { useSelector } from 'react-redux';
import ItemTab from './ItemTab';
import data from '../Data/Data.json'

export default function ItemsList() {
    //const itemsList = useSelector(state => state.DressingRoomReducer.itemsList);

    const renderItemsList = () => {
        return data.tabPanes.map((item, index) => {
            return <ItemTab groupItem={item} key={index} />
        })
    }
    return (
        <div className="well">
            {/* Tab panes */}
            <div className="tab-content">
                {renderItemsList()}
            </div>
        </div>
    )
}
