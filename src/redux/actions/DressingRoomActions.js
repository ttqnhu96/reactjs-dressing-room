import { TRY_ON_CLOTHES } from "../types/DressingRoomTypes";

export const tryOnClothesAction = ({ itemType, url }) => {
    return {
        type: TRY_ON_CLOTHES,
        style: { itemType, url }
    }
}