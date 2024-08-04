import {  HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../IU/components/Navbar"
import { HomePage } from "../saintseiya/page/HomePage"
import { GoldsaintPage } from "../saintseiya/page/GoldsaintPage"
import { BronzesaintPage } from "../saintseiya/page/BronzesaintPage"

const AppRouter = () => {
    return (
        <HashRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/bronze" element={<BronzesaintPage/>}/>
                    <Route path="/gold" element={<GoldsaintPage/>}/>

                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
        </HashRouter>
    )
}

export default AppRouter