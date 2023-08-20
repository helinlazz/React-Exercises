import React, { useState } from 'react'

export default function Form (val = "") {
    const [value, setValue] = useState(val)

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return {
        value,
        onChange: handleChange
    };
}
