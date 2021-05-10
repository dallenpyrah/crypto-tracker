import { actionTypes } from "../constants/ActionTypes"

export const setCoins = (coins) => {
    return {
        type: actionTypes.SET_COINS,
        payload: coins
    }
}

export const selectedCoin = (coin) => {
    return {
        type: actionTypes.SELECTED_COIN,
        payload: coin
    }
}

export const setCoin = (coin) => {
    return {
        type: actionTypes.SET_COIN,
        payload: coin
    }
}

export const removeSelectedCoin = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_COIN
    }
}
