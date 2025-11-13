import React, { useState } from "react";
import { AddEmployeebtn } from "./AddEmployeebtn";

// Sample employee data
const initialEmployees = [
  {
    id: 1,
    fullName: "Alice Johnson",
    jobTitle: "Frontend Developer",
    department: "Engineering",
    email: "alice@example.com",
    location: "Dhaka",
    status: "Active",
    lastLogin: "2025-11-11 10:20 AM",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    fullName: "Bob Smith",
    jobTitle: "HR Manager",
    department: "HR",
    email: "bob@example.com",
    location: "Chittagong",
    status: "Active",
    lastLogin: "2025-11-10 09:15 AM",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    fullName: "Charlie Brown",
    jobTitle: "Marketing Intern",
    department: "Marketing",
    email: "charlie@example.com",
    location: "Dhaka",
    status: "Inactive",
    lastLogin: "2025-11-08 05:30 PM",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export const EmployeeList = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleEdit = (id) => {
    alert(`Edit Employee ID: ${id}`);
    setOpenDropdown(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
    setOpenDropdown(null);
  };

  return (
    <div className="p-6">
        <div className="flex justify-end mx-10">
            <AddEmployeebtn></AddEmployeebtn>
        </div>
      <h2 className="text-2xl font-bold mb-4">Employee List / Overview</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Profile</th>
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Last Login</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b hover:bg-gray-100 relative">
                <td className="py-3 px-4">
                  <img
                    src={emp.profilePic}
                    alt={emp.fullName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4">{emp.fullName}</td>
                <td className="py-3 px-4">{emp.jobTitle}</td>
                <td className="py-3 px-4">{emp.department}</td>
                <td className="py-3 px-4">{emp.email}</td>
                <td className="py-3 px-4">{emp.location}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      emp.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="py-3 px-4">{emp.lastLogin}</td>
                <td className="py-3 px-4">
                  <div className="relative inline-block text-left">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === emp.id ? null : emp.id)
                      }
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      Actions ▾
                    </button>

                    {openDropdown === emp.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                        <button
                          onClick={() => handleEdit(emp.id)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(emp.id)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  No employees available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
