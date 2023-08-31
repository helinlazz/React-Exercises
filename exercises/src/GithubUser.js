import { useParams } from "react-router-dom"
import { useGetGithubUser } from "./UseGithubUser"

export default function GetGithubUser () {

    const { username = "username" } = useParams()

    const { data, loading, error } = useGetGithubUser(username)

    return (
        <div>
            {loading && <h5>Loading...</h5>}
            {data && <h5>{data.login}, {data.name}</h5>}
            {error && <h5>errore</h5>}
        </div>
    )
}