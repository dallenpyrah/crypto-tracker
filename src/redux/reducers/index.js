import { combineReducers } from 'redux'
import { coinsReducer } from './CoinReducer'

const reducers = combineReducers({
    allCoins: coinsReducer
})

export default reducers