import { coinsReducer, selectedCoinReducer } from './CoinReducer'
import { combineReducers } from "redux"

const reducers = combineReducers({
    allCoins: coinsReducer,
    coin: selectedCoinReducer
})
export default reducers