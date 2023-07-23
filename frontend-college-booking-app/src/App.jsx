// import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import HomePage from "./pages/HomePage"
import Colleges from "./pages/Colleges/Colleges"
import Admin from "./pages/Admin/Admin"
import Auth from "./components/Header/Auth/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { adminActions, userActions } from "./store"
import Booking from "./components/Bookings/Booking"


function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, [dispatch]);
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
    <Navbar/>
    <section>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/colleges" element={<Colleges/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/booking/:id" element={<Booking/>} />
      </Routes>
    </section>
    </div>
  )
}

export default App
