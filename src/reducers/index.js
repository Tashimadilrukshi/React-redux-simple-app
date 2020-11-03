//this is the root reducer
import {combineReducers} from 'redux';
import AllPostReducer from './reducerAllPosts';

const rootReducer=combineReducers({
    allPosts:AllPostReducer,
})

export default rootReducer;