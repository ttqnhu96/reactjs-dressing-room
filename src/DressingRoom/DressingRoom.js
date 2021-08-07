import React from 'react'
import ItemCategoriesList from './ItemCategoriesList'
import ItemsList from './ItemsList'
import "../assets/css/DressingRoom.css"
import Model from './Model'

export default function DressingRoom() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="text-center">
                            <img src="./../assets/images/cybersoft.png" alt="cybersoft.png" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                                - Virtual Dressing Room
                            </h4>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ItemCategoriesList />
                    <ItemsList />
                </div>
                <div className="col-md-4">
                    <Model />
                </div>
            </div>

        </div>
    )
}
