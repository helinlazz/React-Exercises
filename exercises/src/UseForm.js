import React from 'react';
import Form from './Form';

export default function useForm () {
    const username = useFormInput('');
    const password = useFormInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username.value);
        console.log(password.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" {...username} />
                <input type="password" {...password} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}


