import {applyMiddleware, combineReducers,createStore} from 'redux';
import { PhimReducer } from './reducers/PhimReducer';
import reduxThunk from 'redux-thunk';
import {LoadingReducer} from './reducers/LoadingReducer'


const rootReducer = combineReducers({
    PhimReducer:PhimReducer,
    LoadingReducer,
})

//apply thunk để xử lý dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk));