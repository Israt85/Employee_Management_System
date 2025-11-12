import React from 'react';
import department from '../../assets/department.png';
import job from '../../assets/job.png';
import { DashboardNav } from '../../Components/DashboardNav';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import employee from '../../assets/Employee.png';
import assets from '../../assets/assts.png';
import recruit from '../../assets/recruit.png';
import leave from '../../assets/leave.png';
import { Menu } from '../../Components/LeaveSelect';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) navigate(value);
  };

  return (
    <div className='w-full min-h-screen bg-blue-100'>
      <DashboardNav />

      <div className='flex'>
        {/* Sidebar */}
        <div className='w-96 h-screen bg-gradient-to-b from-sky-200 to-sky-400'>
          {/* Search Bar */}
          <div className="relative m-4 w-20">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search menu..."
              className="w-80 py-2 pl-10 text-sm focus:outline-none bg-[#FFFFFF99] border rounded-lg"
            />
          </div>

          {/* Navigation Links */}
          {[
            { to: 'menu', label: 'Department', icon: department },
            { to: 'job', label: 'Jobs', icon: job },
            { to: 'employee', label: 'Employee', icon: employee },
            { to: 'Assets', label: 'Assets', icon: assets },
            { to: 'Recruitment', label: 'Recruitment', icon: recruit },
            { to: 'leave', label: 'Leave', icon: leave },
          ].map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex px-6 w-80 mx-4 items-center my-2 py-3 rounded-lg gap-3 ${
                  isActive ? 'bg-[#01010133]' : 'hover:bg-[#01010133]'
                }`
              }
            >
              <ul className='flex items-center gap-3'>
                <img className='w-8 h-8' src={icon} alt={label} />
                <li>{label}</li>
              </ul>
            </NavLink>
          ))}
        </div>

        {/* Main Content */}
        <div className='flex-1 p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;