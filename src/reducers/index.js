import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import thunk from "redux-thunk";

const reducers = combineReducers({
    counterReducer,
    isLoggedReducer,
})

export const store = createStore(reducers,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())