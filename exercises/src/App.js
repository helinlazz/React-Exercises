import { Route, Routes } from 'react-router-dom'
import Counter from './Counter'

export default function App () {

    return (
        <div>
            <Routes>
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </div>
    )
}