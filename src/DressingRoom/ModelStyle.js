import React, { memo } from 'react'
import { useTransition, animated } from 'react-spring'

function ItemTransition(props) {
    const propsUseTransition = useTransition(props, {
        from: { transform: `translate(${props.startTranslateX}px,${props.startTranslateY}px) scale(${props.scaleStart})`, opacity: 0, position: 'absolute', zIndex: props.zIndex },
        enter: { transform: `translate(${props.endTranslateX}px, ${props.endTranslateY}px) scale(${props.scaleStart * 2})`, opacity: 1, position: 'absolute', zIndex: props.zIndex },
        reset: true,
        config: { duration: 1000 }
    })

    let renderItem = () => {
        return propsUseTransition((propsTransition, props) => {
            if (props.itemType === 'background') {
                return <animated.div className={props.itemType} style={propsTransition}>
                    <img className="img-fluid" style={{ height: '100%' }} src={props.url} alt={props.url} />
                </animated.div >
            } else {
                return <animated.div className={props.itemType} style={propsTransition}>
                    <img src={props.url} alt={props.url} />
                </animated.div >
            }
        })
    }

    return (
        <div>
            {renderItem()}
        </div>
    )
}

export default memo(ItemTransition);