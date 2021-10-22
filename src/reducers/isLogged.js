const initialState = {
    isLogged: false,
}
const SIGN_IN = 'SIGN_IN'

const isLoggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log('hi')
            return {...state, isLogged: !state.isLogged}

        default:
            return state

    }
}

export default isLoggedReducer;