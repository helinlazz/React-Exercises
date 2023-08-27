import { Route, Routes } from 'react-router-dom'
import { GetGithubUser } from './GithubUser';

export default function App () {

    return (
        <div>
            <Routes>
                <Route path="/users/:username" element={<GetGithubUser />} />
            </Routes>
        </div>
    )
}