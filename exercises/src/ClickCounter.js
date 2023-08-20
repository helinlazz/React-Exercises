import React, { useState } from 'react'

export default function ClickCounter () {
    const [count, setCount] = useState(0);

    const up = () => {
        setCount((latestCount) => latestCount + 1);
    }

    const down = () => {
        setCount((latestCount) => latestCount - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={up}></button>
            <button onClick={down}></button>
        </div>
    )
}
