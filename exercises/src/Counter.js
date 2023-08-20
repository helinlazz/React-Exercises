import React, { useState } from 'react'

export default function useCounter (val = 0) {
    const [count, setCount] = useState(val)

    const increment = () => {
        setCount((latestCount) => latestCount + 1);
    };

    const decrement = () => {
        setCount((latestCount) => latestCount - 1);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return (
        <>
            count,
            increment,
            decrement,
            reset
        </>
    )
}
