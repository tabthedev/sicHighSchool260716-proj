import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'

export default function Root() {
    return <>

        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </HashRouter>
    </>
}
