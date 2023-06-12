import { combineReducers, legacy_createStore } from "redux";
import { CounterReducer } from "./reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);

//@ts-ignore
window.store = store;