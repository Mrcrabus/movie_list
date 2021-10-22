import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    cash: 0,
    inputValue: 0
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const changeInput = createAction('CHANGE_INPUT')

export default createReducer(initialState, {
    [increment]: (state) => {
        state.cash += state.inputValue
    },
    [decrement]: (state) => {
        state.cash -= state.inputValue
    },
    [changeInput]: (state, inputValue) => {
        state.inputValue = inputValue
    },
})