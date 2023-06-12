
const initialState = {
    value: 0
}

type InitialStateType = typeof initialState;
type ActionType = IncreaseCounterACType | ResetCounterACType;
export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREASE-COUNTER": {
            return { ...state, value: state.value + 1 };
        }
        case "RESET-COUNTER": {
            const currentValue = state.value;
            return { ...state, value: state.value - currentValue };
        }
        default: {
            return state;
        }
    }
}

type IncreaseCounterACType = ReturnType<typeof IncreaseCounterAC>
export const IncreaseCounterAC = () => {
    return {
        type: 'INCREASE-COUNTER'
    } as const
}


type ResetCounterACType = ReturnType<typeof ResetCounterAC>
export const ResetCounterAC = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
}