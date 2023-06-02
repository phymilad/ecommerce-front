import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AdminRoutes } from './pages/admin/AdminRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/client' element={<Home /> } />
        <Route path='/admin/*' element={<AdminRoutes /> } />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
