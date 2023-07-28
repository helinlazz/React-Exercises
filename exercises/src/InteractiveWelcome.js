import { useState } from "react"

export default function InteractiveWelcome () {
    const [name, setName] = useState("");

    const handleInput = (event) => {
        const inputElement = event.target.value;
        setName(inputElement);
    }


    return (
        <>
            <input type="text" value={name} onChange={handleInput} />
            <h3>Welcome {name}!</h3>
        </>
    )
}