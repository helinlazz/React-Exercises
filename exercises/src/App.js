import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function App () {

    const [numbers, setNumbers] = useState({
        plus: 1,
        minus: 1,
        reset: 0,
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNumbers((numbers) => {
            return {
                ...numbers,
                [name]: value
            }
        })
    }

    console.log(numbers)

    return (
        <div>
            <Counter initialVal={numbers.reset} incrementVal={numbers.plus} decrementVal={numbers.minus} />
            <input type='number' name='plus' value={numbers.plus} onChange={handleChange} />
            <input type='number' name='minus' value={numbers.minus} onChange={handleChange} />
            <input type='number' name='reset' value={numbers.reset} onChange={handleChange} />
        </div>
    )
}