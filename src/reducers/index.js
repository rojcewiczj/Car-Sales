import { combineReducers } from "redux";
import { addedReducer } from "./addedReducer";
import { additionalReducer } from "./additionalReducer";

export default combineReducers ({
    addedReducer: addedReducer,
    additionalReducer: additionalReducer
})