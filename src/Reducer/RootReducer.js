import {
    ADD_TROUSERS,
    ADD_SHIRTS,
    ADD_SHOES,
    ADD_ALL,
    RESET_QUANTITY,
    DELETE_TROUSER,
    DELETE_SHIRT,
    DELETE_SHOE
} from "../Actions/Actions";

export const shopCart = {
    trousers: 500,
    shirts: 1000,
    shoes: 700,
    quantity1: 0,
    quantity2: 0,
    quantity3: 0,
    troures: 0,
    shirtres: 0,
    shoeres: 0,
    finalres: 0,
};

const RootReducer = (state = shopCart, action) => {
    switch (action.type) {
        case ADD_TROUSERS:
            const TROU = state.trousers;
            const QUANTITY1 = state.quantity1 + 1;
            const newTrousers = TROU * QUANTITY1;
            const deletetrou = state.finalres - TROU;
            return {
                ...state,
                trousers: TROU,
                quantity1: QUANTITY1,
                troures: newTrousers,
                finalres: deletetrou
            };
        case ADD_SHIRTS:
            const SHIRT = state.shirts;
            const QUANTITY2 = state.quantity2 + 1;
            const newShirts = SHIRT * QUANTITY2;
            const deleteShir = state.finalres - SHIRT;
            return {
                ...state,
                shirts: SHIRT,
                quantity2: QUANTITY2,
                shirtres: newShirts,
                finalres: deleteShir
            };
        case ADD_SHOES:
            const SHOE = state.shoes;
            const QUANTITY3 = state.quantity3 + 1;
            const newShoes = SHOE * QUANTITY3;
            const deletesho = state.finalres - SHOE;
            return {
                ...state,
                shoes: SHOE,
                quantity3: QUANTITY3,
                shoeres: newShoes,
                finalres: deletesho
            };
        case ADD_ALL:
            const add = state.troures + state.shirtres + state.shoeres;
            return { ...state, finalres: add };
        case RESET_QUANTITY:
            return {
                ...state,
                quantity1: 0,
                quantity2: 0,
                quantity3: 0,
                troures: 0,
                shirtres: 0,
                shoeres: 0,
                finalres: 0,
            };
        case DELETE_TROUSER:
            const deleteQuantity1 = state.quantity1 - 2;
            const subtractFromTotal = state.trousers * deleteQuantity1;
            return { ...state, quantity1: deleteQuantity1, troures: subtractFromTotal };
        case DELETE_SHIRT:
            const deleteQuantity2 = state.quantity2 - 2;
            const subtractFromTotal1 = state.shirts * deleteQuantity2;
            return { ...state, quantity2: deleteQuantity2, shirtres: subtractFromTotal1 };
        case DELETE_SHOE:
            const deleteQuantity3 = state.quantity3 - 2;
            const subtractFromTotal3 = state.shoes * deleteQuantity3;
            return { ...state, quantity3: deleteQuantity3, shoeres: subtractFromTotal3 };
        default:
            return state;
    }
};


export default RootReducer;
