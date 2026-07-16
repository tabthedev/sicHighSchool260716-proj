import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Game01 from './Game01/Game01.jsx'

export default function Root() {
    return <>

        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/game01" element={<Game01/>}></Route>
            </Routes>
        </HashRouter>
    </>
}
