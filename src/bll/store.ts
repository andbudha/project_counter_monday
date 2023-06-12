import { combineReducers, legacy_createStore } from "redux";
import { CounterReducer } from "./reducer";
import { retrieveData, setData } from "../localstorage/localstorage";

export const rootReducer = combineReducers({
    counter: CounterReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, retrieveData());

store.subscribe(() => {
    setData({
        counter: store.getState().counter
    })
});
//@ts-ignore
window.store = store;