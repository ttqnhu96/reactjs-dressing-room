import React, {memo} from 'react'
import data from '../Data/Data.json'

function ModelBody() {
    const renderOriginalStyle = () => {
        return data.originalStyle.map((item, index) => {
            return <div className={item.className} key={index} />
        })
    }
    return (
        <div>
            {renderOriginalStyle()}
        </div>
    )
}

export default memo(ModelBody);
