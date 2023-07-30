import { useState } from "react";

export default function TodoList () {
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


    const list = () => {
        return (<ul>
            {items.map((item, index) => (
                <li key={index}>{item}
                    <button onClick={() => handleRemove(index)}>Remove</button></li>
            ))}
        </ul>
        )
    }






    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleItem}>Add</button>
            <button onClick={handleReset}>Reset</button>
            {items.length > 0 && list()}
        </div>
    );
}