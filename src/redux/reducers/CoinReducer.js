import { actionTypes } from "../constants/ActionTypes"

const initialState = {
    coins: []
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
        default: 
            return state; 
    }
}