
const initialState = {
    value: 0
}

type InitialStateType = typeof initialState;
type ActionType = any;
export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'XXX': {
            return state;
        }
        default: {
            return state;
        }
    }
}