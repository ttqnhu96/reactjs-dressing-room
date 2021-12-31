import React from 'react'
import Category from './Category';
import data from '../Data/Data.json'

export default function ItemCategoriesList() {
    const renderCategoriesList = () => {
        return data.navPills.map((item, index) => {
            return <li className="nav-item" key={index}>
                <Category category={item} />
            </li>
        })
    }

    return (
        <ul className="nav nav-pills">
            {renderCategoriesList()}
        </ul>
    )
}
