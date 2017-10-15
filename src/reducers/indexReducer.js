/*
 * description: all of reducer to combine
 * author: 麦芽糖
 * time: 2017年03月18日14:28:04
 */

'use strict'

import {combineReducers} from 'redux'
import rankingReducer from './rankingReducer'

const rootReducer = combineReducers({
    rankingReducer
})

export default rootReducer