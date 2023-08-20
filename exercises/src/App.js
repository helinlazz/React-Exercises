import React from "react";
import ClickCounter from "./ClickCounter";


export default function App () {
    const changeCounter = (value) => {
        console.log(value);
    };
    return (
        <ClickCounter onCounterChange={changeCounter} />
    );
}