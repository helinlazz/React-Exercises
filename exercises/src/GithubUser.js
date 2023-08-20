import React from 'react';
import useGithubUser from './useGithubUser';

export default function GithubUser ({ username }) {
    const user = useGithubUser(username);

    return (

        <h2>Github User: {name}</h2>

    );
}


