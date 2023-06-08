import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { AdminRoutes } from './pages/admin/AdminRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/client" replace />}/>
        <Route path='/client' element={<Home /> } />
        <Route path='/admin/*' element={<AdminRoutes /> } />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
