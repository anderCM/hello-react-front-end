import { configureStore, combineReducers } from "@reduxjs/toolkit";
import greetingReducer from './greetings';

const rootReducer = combineReducers({
    greeting: greetingReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;