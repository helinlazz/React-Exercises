import React from 'react'
import useCounter from './Counter';

export default function UseCounter () {
    const counter = useCounter(0);
    return (
        <>
            <h1>{counter.count}</h1>
            <button onClick={counter.increment}>Increment</button>
            <button onClick={counter.decrement}>Decrement</button>
            <button onClick={counter.reset}>Reset</button>
        </>
    )
}
