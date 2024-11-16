import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx"

function Home() {
  return (
    <div className="w-11/12 mx-auto">
        Home
        <Navbar/>

        <Outlet/>
    </div>
  )
}

export default Home