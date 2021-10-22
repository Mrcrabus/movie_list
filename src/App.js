import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrementAC, incrementAC, inputChangeAC, signInAC} from "./actons/actions";

const App = () => {

    const counter = useSelector(state => state.counterReducer.cash)
    const inputValue = useSelector(state => state.counterReducer.inputValue)
    const isLogged = useSelector(state => state.isLoggedReducer.isLogged)

    const dispatch = useDispatch()

    return (
        <div>
            {isLogged ? <div><h1>{counter}</h1>
                <input type="text" value={inputValue} onChange={(e) => dispatch(inputChangeAC(e.target.value))}/>
                <button onClick={() => dispatch(incrementAC())}>Increment</button>
                <button onClick={() => dispatch(decrementAC())}>Decrement</button>
            </div> : <button onClick={() => dispatch(signInAC())}>Sign in</button>}



        </div>
    );
};

export default App;