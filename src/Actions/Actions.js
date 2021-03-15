export const ADD_TROUSERS = "ADD_TROUSERS";
export const ADD_SHIRTS = "ADD_SHIRTS";
export const ADD_SHOES = "ADD_SHOES";
export const ADD_ALL = "ADD_ALL";
export const RESET_QUANTITY = "RESET_QUANTITY";
export const DELETE_TROUSER = "DELETE_TROUSER";
export const DELETE_SHIRT = "DELETE_SHIRT";
export const DELETE_SHOE = "DELETE_SHOE";

export function addTrouser(shopCart) {
    return {
        type: ADD_TROUSERS,
        payload: shopCart
    }
}

export function addShirts(shopCart) {
    return {
        type: ADD_SHIRTS,
        payload: shopCart
    }
}

export function addShoes(shopCart) {
    return {
        type: ADD_SHOES,
        payload: shopCart
    }
}

export function addAll(shopCart) {
    return {
        type: ADD_ALL,
        payload: shopCart
    }
}

export function restQuantity(shopCart) {
    return {
        type: RESET_QUANTITY,
        payload: shopCart
    }
}

export function deleteTrouser(shopCart) {
    return {
        type: DELETE_TROUSER,
        payload: shopCart
    }
}

export function deleteShirt(shopCart) {
    return {
        type: DELETE_SHIRT,
        payload: shopCart
    }
}

export function deleteShoe(shopCart) {
    return {
        type: DELETE_SHOE,
        payload: shopCart
    }
}
