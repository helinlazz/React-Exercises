import { useCounter } from "./useCounter"

export default function Counter ({ initialVal = 1, incrementVal = 1, decrementVal = 1 }) {

    const { counter, increment, subtract, reset } = useCounter(initialVal, incrementVal, decrementVal)

    return (
        <div>
            <h5>Counter: {counter}</h5>
            <button onClick={increment}>add</button>
            <button onClick={subtract}>sub</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}