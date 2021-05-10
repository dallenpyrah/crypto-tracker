import { actionTypes } from "../constants/ActionTypes"

const initialState = {
    coins: [],
    coin: {}
}

export const coinReducer = (state = initialState,{ type, payload }) => {
    switch(type){
        case actionTypes.SET_COIN:
            return { ...state, coin: payload }
        default: 
            return { state }
    }
}

export const coinsReducer = (state = initialState, { type, payload }) => {
    switch (type){
        case actionTypes.SET_COINS:
            return { ...state, coins: payload };
        default: 
            return state;
    }
}

export const selectedCoinReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case actionTypes.SELECTED_COIN:
            return { ...state, ...payload};
        case actionTypes.REMOVE_SELECTED_COIN:
            return {};
        default: 
            return state; 
    }
}