import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        cash: 21,
        inputValue: 12
    },
    reducers: {
        increment(state) {
            state.cash += state.inputValue
        },
        decrement(state) {
            state.cash -= state.inputValue
        },
        changeInput(state, action) {
            state.inputValue = +action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {decrement, increment, changeInput} = toolkitSlice.actions