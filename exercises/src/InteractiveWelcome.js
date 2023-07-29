import { useState } from "react"
import { Welcome } from "./Welcome";

export default function InteractiveWelcome () {
    const [name, setName] = useState("");

    const handleInput = (event) => {
        const inputElement = event.target.value;
        setName(inputElement);
    }


    return (
        <>
            <input type="text" value={name} onChange={handleInput} />
            <Welcome name={<strong>Mrika</strong>} age={25} />
        </>
    )
}