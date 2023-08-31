
import { Route, Routes } from 'react-router-dom'
import { CarDetails } from './CarDetails'
import { Welcome } from './welcome'
import { Login } from './Login'
import { NotFound } from './NotFound'
import { FetchGithubUserList } from './GithubUserList'

export default function App () {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />}></Route>
                <Route path="/CarDetails" element={<CarDetails />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
                <Route path="/GithubUserList" element={<FetchGithubUserList />} />
            </Routes>
        </div>
    )
}