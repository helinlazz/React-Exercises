import { useState } from "react";
import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export default function GithubUserList () {

    const [user, setUser] = useState('')

    function handleInputChange (event) {
        setUser(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor='username'>Search user</label>
                <input name='username' type='text' value={user} onChange={handleInputChange} />
            </form>
            <Link to={'/users' + user}>Search</Link>
            <GithubUser />
        </div>
    );
}