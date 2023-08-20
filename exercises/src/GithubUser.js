import React, { useState } from 'react'

export default function GithubUser ({ username }) {
    const [user, setUser] = useState()

    useEffect(() => {
        async function fetchUser () {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser();
    }, [username]);


    return (
        <>
            <h2>Github user: {user.name}</h2>
        </>
    )
}

