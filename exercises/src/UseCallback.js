import { useCallback, useState } from "react"

export function useCounter (initialVal, incrementVal, decrementVal) {
    const [count, setCount] = useState(initialVal)

    const handleIncrement = useCallback(function add1 () {
        setCount(count => count + incrementVal)
    }, []);
    const handleDecrement = useCallback(function sub1 () {
        setCount(count => count - decrementVal)
    }, []);
    const handleReset = useCallback(function resetCount () {
        setCount(initialVal)
    }, []);

    return {
        counter: count,
        increment: handleIncrement,
        subtract: handleDecrement,
        reset: handleReset,
    }
}