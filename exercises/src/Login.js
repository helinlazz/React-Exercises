import React, { useState } from 'react'

export default function Login () {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    const changeUsername = (event) => {
        setUsername(event.target.value);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const changeRemember = (event) => {
        setRemember(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember:', remember);

        return (
            <div>Login
                <form onSubmit={handleSubmit} />
                <input onChange={changeUsername} type='text' name='username' />
                <input onChange={changePassword} type='password' name='password' />
                <input onChange={changeRemember} type='checkbox' name='remember' checked={remember} />
                <button type='submit'>Submit</button>
            </div>
        )
    }
}

