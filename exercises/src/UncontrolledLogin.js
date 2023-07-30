import React from "react";

export default function UncontrolledLogin () {

    const handleLogin = (event) => {
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value

        console.log({
            username: username,
            password: password
        });
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <input name="username" />
                <input name="password" type="password" />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

