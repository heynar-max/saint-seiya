import { Route, Routes } from "react-router-dom"
import { BronzesaintPage, GoldsaintPage, HomePage, NotFound, SaintPage, SearchPage } from "../page"
import { Navbar } from "../../IU/components"
import { Sidebar } from "../../IU/components"



export const SaintSeiyaRoutes = () => {
    return (
        <>
        <Navbar/>
        <Sidebar/>
            <div className="router_container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/bronze" element={<BronzesaintPage/>}/>
                    <Route path="/gold" element={<GoldsaintPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/saint/:id" element={<SaintPage/>}/>

                    {/* <Route path="/*" element={<Navigate to='/'/>}/> */}
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </div>
    </>
    )
}
