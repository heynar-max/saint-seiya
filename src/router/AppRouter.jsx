import {  Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { SaintSeiyaRoutes } from "../saintseiya/routes/SaintSeiyaRoutes"

const AppRouter = () => {
    return (
        <>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    
                    <Route path="*" element={<SaintSeiyaRoutes/>}/>
                </Routes>
        </>
    )
}

export default AppRouter