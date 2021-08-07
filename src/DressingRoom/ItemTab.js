import React from 'react'
import Item from './Item';

export default function ItemTab(props) {
    const { groupItem } = props;
    const renderItem = () => {
        return groupItem.itemsList.map((item, index) => {
            return <div className="col-md-3" key={index}>
                <Item item={item} />
            </div>
        })
    }
    return (
        <div className={groupItem.className} id={groupItem.id}>
            <div className="container">
                <div className="row">
                    {renderItem()}
                </div>
            </div>
        </div>
    )
}
