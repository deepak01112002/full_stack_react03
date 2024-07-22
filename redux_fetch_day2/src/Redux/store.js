import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { LoginReducer } from "./LoginReducer.js/loginreducer";

const MainReducer = combineReducers({
    reducer,
    LoginReducer
})



export const store = legacy_createStore(MainReducer)