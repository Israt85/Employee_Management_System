import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'

import { Login } from './Pages/Login/Login.jsx'
import { Dashboard } from './Pages/Dashboard/Dashboard.jsx'
import { Employee } from './Pages/Dashboard/Employee.jsx'
import { Jobs } from './Pages/Dashboard/Jobs.jsx'
import { Department } from './Pages/Dashboard/Department.jsx'
import { Assests } from './Pages/Dashboard/Assests.jsx'
import { Recruitment } from './Pages/Dashboard/Recruitment.jsx'
import { SignUp } from './Pages/SignUp/SignUp.jsx'
import { Leave } from './Pages/Dashboard/Leave.jsx'
import OverView from './Pages/Dashboard/OverView.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main login and signup routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Nested routes inside Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<OverView/>} />
          <Route path="menu" element={<Department />} />
          <Route path="job" element={<Jobs />} />
          <Route path="employee" element={<Employee />} />
          <Route path="assets" element={<Assests />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="leave" element={<Leave />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
