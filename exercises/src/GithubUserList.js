import React, { useState } from 'react'; // Don't forget to import useState

export default function GithubUserList () {
    const [usernames, setUsernames] = useState([]);
    const [newUsername, setNewUsername] = useState('');

    const changeUsername = (event) => {
        const user = event.target.value;
        setNewUsername(user);
    };

    const handleAddUsername = () => {
        setUsernames([...usernames, newUsername]);
        setNewUsername('');
    };


    return (
        <>
            <form>
                <input onChange={changeUsername} type="text" value={newUsername} />
                <button onClick={handleAddUsername}>Add</button>
            </form>
        </>
    )
}
