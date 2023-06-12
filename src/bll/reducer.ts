
const initialState = {
    value: 0
}

type InitialStateType = typeof initialState;
type ActionType = IncreaseCounterACType;
export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREASE-COUNTER": {
            return { ...state, value: state.value + 1 };
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