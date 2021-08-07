import React, { memo } from 'react'
import { useTransition, animated } from 'react-spring'

function ItemTransition(props) {
    const { className, url, startTranslateX, startTranslateY } = props;
    let item = {
        className: className,
        url: url,
        startTranslateX: startTranslateX,
        startTranslateY: startTranslateY
    }

    const propsUseTransition = useTransition(item, {
        from: { transform: `translate(${item.startTranslateX}px,${item.startTranslateY}px) scale(0.25)`, opacity: 0 },
        enter: { transform: `translate(${item.startTranslateX + 219}px, ${item.startTranslateY}px) scale(0.6)`, opacity: 0.8 },
        reset: true,
        config: { duration: 1000 }
    })

    let renderItem = () => {
        return propsUseTransition((propsTransition, item) => {
            return <animated.div className={item.className} style={propsTransition}>
                <img src={item.url} alt=""/>
            </animated.div >
        })
    }

    return (
        <div>
            {renderItem()}
        </div>
    )
}

export default memo(ItemTransition);