import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import bankReducer from "./reducers/bankReducer"

const reducers = combineReducers({
    bank: bankReducer
})

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)