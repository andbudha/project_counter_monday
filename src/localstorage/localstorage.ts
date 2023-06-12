import { AppRootStateType } from "../bll/store";

export const retrieveData = () => {
    const currentData = localStorage.getItem('counter-value');
    if (currentData) {
        return JSON.parse(currentData);
    }
}

export const setData = (state: AppRootStateType) => {
    localStorage.setItem('counter-value', JSON.stringify(state));
}