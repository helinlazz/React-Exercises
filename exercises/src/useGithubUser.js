import { useState, useEffect } from 'react';

export default function useGithubUser (username) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchUser = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (username) {
            fetchUser();
        }
    }, [username]);

    return {
        user,
        loading,
        error,
        fetchUser: fetchUser
    };
}
