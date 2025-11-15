import React from "react";
import { useNavigate } from "react-router";

export const Menu = () => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) navigate(value); // navigate to the selected route
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-sky-100 to-sky-400">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <label htmlFor="menu" className="block text-lg font-semibold mb-3">
          Choose an option:
        </label>
        <select
          id="menu"
          onChange={handleSelect}
          className="w-64 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="">-- Select Menu --</option>
          <option value="/leave">Leave</option>
          <option value="/attendance">Attendance</option>
          <option value="/salary">Salary</option>
          <option value="/employees">Employees</option>
        </select>
      </div>
    </div>
  );
};
