import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { tryOnClothesAction } from '../redux/actions/DressingRoomActions';
import { useSpring, animated } from 'react-spring';

export default function Item(props) {
    const dispatch = useDispatch();

    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 500 },
    })


    const { item } = props;
    return (
        <div className="card text-center bg-white mt-2">
            <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
            <h4><b>{item.name}</b></h4>
            <animated.button className="btn btn-dark" style={{
                scale: x.to({
                    range: [0, 0.5, 1],
                    output: [1, 0.9, 1],
                })
            }}
                onClick={() => {
                    toggle(!state)
                    dispatch(tryOnClothesAction({ itemType: item.type, url: item.imgSrc_png }))
                }}>Thử đồ</animated.button>
        </div>
    )
}
