import { legacy_createStore,applyMiddleware } from "redux";
import { productReducer } from "./productReducer/productReducer";
import { thunk } from "redux-thunk";


export const store = legacy_createStore(productReducer,applyMiddleware(thunk))