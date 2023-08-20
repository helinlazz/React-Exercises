import { useState, useEffect } from 'react';

export default function useGithubUser (username) {
    const [user, setUser] = useState();

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

        if (username) {
            fetchUser();
        }
    }, [username]);

    return user;
}


