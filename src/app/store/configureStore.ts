import { combineReducers, configureStore } from "@reduxjs/toolkit";
import score from "./score/score";

const reducer = combineReducers({ score });

const store = configureStore({ reducer });

export default store;