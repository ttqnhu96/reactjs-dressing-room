import { TRY_ON_CLOTHES } from "../types/DressingRoomTypes";

const initialState = {
    newStyle: {
        hairstyle: { itemType: "hairstyle", url: "", startTranslateX: -186, startTranslateY: -4, endTranslateX: 1, endTranslateY: 0, scaleStart: 0.075, zIndex: 5 },
        necklaces: { itemType: "necklaces", url: "", startTranslateX: -163, startTranslateY: -78, endTranslateX: 1, endTranslateY: -7, scaleStart: 0.25, zIndex: 5 },
        topclothes: { itemType: "topclothes", url: "", startTranslateX: -165, startTranslateY: -15, endTranslateX: -1, endTranslateY: -2, scaleStart: 0.25, zIndex: 4 },
        botclothes: { itemType: "botclothes", url: "", startTranslateX: -165, startTranslateY: -36, endTranslateX: -1, endTranslateY: 0, scaleStart: 0.25, zIndex: 3 },
        handbags: { itemType: "handbags", url: "", startTranslateX: -158, startTranslateY: -10, endTranslateX: -1, endTranslateY: -5, scaleStart: 0.25, zIndex: 5 },
        shoes: { itemType: "shoes", url: "", startTranslateX: -172, startTranslateY: 103, endTranslateX: 0, endTranslateY: 0, scaleStart: 0.25, zIndex: 2 },
        background: { itemType: "background", url: "", startTranslateX: -112, startTranslateY: -187, endTranslateX: 0, endTranslateY: 0, scaleStart: 0.25, zIndex: -1 },
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