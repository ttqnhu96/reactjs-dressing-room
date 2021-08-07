import React from 'react'

export default function Category(props) {
    const { category } = props;
    return (
        <a className={category.className} data-toggle="pill" href={category.tabName}>{category.showName}</a>
    )
}
