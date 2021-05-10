import { combineReducers } from 'redux'
import { coinsReducer, selectedCoinReducer } from './CoinReducer'

const reducers = combineReducers({
    allCoins: coinsReducer,
    coin: selectedCoinReducer
})

export default reducers