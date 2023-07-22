import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './actions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h2>Счетчик: { count }</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>*</button>
            <button onClick={handleDecrement}>/</button>
        </div>
    );
};

export default Counter;