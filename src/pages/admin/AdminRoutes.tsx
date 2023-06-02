import { Routes, Route } from "react-router-dom"
import { Admin } from "./Admin"
import { AdminLogin } from "./AdminLogin"

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/Login" element={<AdminLogin />} />
    </Routes>
  )
}
