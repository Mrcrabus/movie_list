const initialState = {
    cash: 0,
    inputValue: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, cash: state.cash + state.inputValue}
        case 'DECREMENT':
            return {...state, cash: state.cash - state.inputValue}
        case 'CHANGE_INPUT':
            return {...state, inputValue: +action.value}
        default:
            return state

    }
}

export default counterReducer;