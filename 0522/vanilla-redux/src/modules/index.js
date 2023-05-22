import {combineReducers} from 'redux';
//두개의 reducer를 합치자
import goodsReducer from './goodsCounter';
import stockReducer from './stockCounter';

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
})

export default rootReducer;