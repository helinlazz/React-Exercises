import { useState } from "react"

export default function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event) => {
        const usernameElement = event.target.value;
        setUsername(usernameElement);
    }

    const handlePassword = (event) => {
        const passwordElement = event.target.value;
        setPassword(passwordElement);
    }

    const handleLogin = () => {
        if (username && password) {
            console.log(username, password);
        } else {
            console.log("Enter username and password");
        }
    }

    const handleReset = () => {
        setUsername("");
        setPassword("");

    }


    return (
        <>
            <input type="text" value={username} onChange={handleUsername} />
            <input type="password" value={password} onChange={handlePassword} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}