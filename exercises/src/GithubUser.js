import { useParams } from "react-router-dom"
import { useGithubUser } from "./UseGithubUser"

export default function GithubUser () {

    const { username } = useParams()

    const { data, loading, error } = useGithubUser(username)

    return (
        <div>
            {loading && <h5>Loading...</h5>}
            {data && <h5>{data.login}<br />{data.name}</h5>}
            {error && <h5>errore</h5>}
        </div>
    )
}