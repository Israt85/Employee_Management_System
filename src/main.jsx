import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Default imports for your pages
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Employee from './Pages/Dashboard/Employee.jsx';
import Jobs from './Pages/Dashboard/Jobs.jsx';
import Department from './Pages/Dashboard/Department.jsx';
import Assets from './Pages/Dashboard/Assets.jsx';
import Recruitment from './Pages/Dashboard/Recruitment.jsx';
import Leave from './Pages/Dashboard/Leave.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="Menu" element={<Department />} />
          <Route path="Job" element={<Jobs />} />
          <Route path="Employee" element={<Employee />} />
          <Route path="Assets" element={<Assets />} />
          <Route path="Recruitment" element={<Recruitment />} />
          <Route path="Leave" element={<Leave />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);