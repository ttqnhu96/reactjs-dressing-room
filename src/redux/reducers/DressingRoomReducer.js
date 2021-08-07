import { TRY_ON_CLOTHES } from "../types/DressingRoomTypes";

const initialState = {
    newStyle: {
        hairstyle: { itemType: "hairstyle", url: "", startTranslateX: -217, startTranslateY: 12 },
        necklaces: { itemType: "necklaces", url: "", startTranslateX: -264, startTranslateY: 12 },
        topclothes: { itemType: "topclothes", url: "", startTranslateX: -217, startTranslateY: -159 },
        botclothes: { itemType: "botclothes", url: "", startTranslateX: -264, startTranslateY: 12 },
        handbags: { itemType: "handbags", url: "", startTranslateX: -264, startTranslateY: 12 },
        shoes: { itemType: "shoes", url: "", startTranslateX: -264, startTranslateY: -208 },
        background: { itemType: "background", url: "", startTranslateX: -264, startTranslateY: 12 },
    }
}


const DressingRoomtReducer = (state = initialState, action) => {

    switch (action.type) {

        case TRY_ON_CLOTHES: {
            let { itemType, url } = action.style;
            let updateState = { ...state.newStyle };
            updateState[itemType].url = url;
            state.newStyle = updateState;
            return state;
        }
        default:
            return state
    }
}

export default DressingRoomtReducer;