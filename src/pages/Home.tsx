import { Route, Routes } from "react-router-dom"
import { Main } from "../components/Main/Main"
import { SideBar } from "../components/SideBar/SideBar"


const Home = () => {
    return <>
        <SideBar />
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/scheduled"} element={<Main />} />
            <Route path={"/settings"} element={<Main />} />
            <Route path={"/logout"} element={<Main />} />

        </Routes>
    </>
}

export default Home