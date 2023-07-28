import { useState } from "react"

export default function ClickCounter () {
    const [counter, setCounter] = useState(0);

    const handleClickButton = () => {
        setCounter[counter => counter + 1];
    }

    return (
        <>
            <h1>Click counter: {counter}</h1>
            <button onClick={handleClickButton}>Click</button>
        </>
    )
}