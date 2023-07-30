import React from "react";
import TodoList from "./TodoList";


export default function App () {

    const renderProp = (items, handleRemove) => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <TodoList prop={renderProp} />
        </>

    )
}