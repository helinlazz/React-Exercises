import { useState } from "react";
import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function FetchGithubUserList () {

    const [user, setUser] = useState('')

    function handleInputChange (event) {
        setUser(event.target.value)
    }

    return (
        <div>
            <form>
                <label for='username'>Search user</label>
                <input name='username' type='text' value={user} onChange={handleInputChange} />
            </form>
            <Link to="/users" element={<GithubUser />}>search</Link>
        </div>
    )
}