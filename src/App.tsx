import './App.css'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
