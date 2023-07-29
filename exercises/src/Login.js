import { useState } from "react"

export default function Login ({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setDisabled] = useState(true);

    const handleUsername = (event) => {
        const usernameElement = event.target.value;
        setUsername(usernameElement);
    }

    const handlePassword = (event) => {
        const passwordElement = event.target.value;
        setPassword(passwordElement);
    }

    const handleLogin = () => {
        onLogin({ username, password });

        if (username && password) {
            console.log(username, password);
        } else {
            console.log("Enter username and password");
        }
    }


    return (
        <>
            <input type="text" value={username} onChange={handleUsername} />
            <input type="password" value={password} onChange={handlePassword} />
            <button disabled={isDisabled} onClick={handleLogin}>Login</button>
        </>
    )
}