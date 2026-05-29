import type { ReactNode } from 'react'
import './App.css'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

type Props = {
  children: ReactNode;
}
const ProtectedRoutes = ({children}: Props) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to="/" replace/>
  } 

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoutes>
              <AdminDashboard/>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
