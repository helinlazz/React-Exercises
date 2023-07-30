import { useState } from "react";

export default function TodoList ({ prop }) {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleItem = () => {
        if (input !== "") {
            setItems([...items, input]);
            setInput("");
        }
    };

    const handleRemove = (ind) => {
        const newItems = items.filter((item, i) => i !== ind);
        setItems(newItems);
    }

    const handleReset = () => {
        setItems([]);
    }







    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleItem}>Add</button>
            <button onClick={handleReset}>Reset</button>
            {prop(items, handleRemove)}
        </div>
    );
}