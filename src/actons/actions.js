export const incrementAC = () => {
    return {
        type: 'INCREMENT'
    }
}
export const decrementAC = () => {
    return {
        type: 'DECREMENT'

    }
}

export const inputChangeAC = (value) => {
    return {
        type: 'CHANGE_INPUT',
        value
    }
}
export const signInAC = () => {
    return {
        type: 'SIGN_IN'
    }
}