// import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import HomePage from "./pages/HomePage"
import Colleges from "./pages/Colleges/Colleges"
import Admin from "./pages/Admin/Admin"
import Auth from "./components/Header/Auth/Auth"


function App() {
  
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
    <Navbar/>
    <section>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/colleges" element={<Colleges/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </section>
    </div>
  )
}

export default App
