import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInput, decrement, increment} from "./toolkitRedux/toolkitSlice";

const App = () => {

    const counter = useSelector(state => state.toolkit.cash)
    const inputValue = useSelector(state => state.toolkit.inputValue)

    // const isLogged = useSelector(state => state.isLoggedReducer.isLogged)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>{counter}</h1>
            <input type="text" value={inputValue} onChange={(e) => dispatch(changeInput(e.target.value))}/>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>


        </div>
    );
};

export default App;