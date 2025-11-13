import React, { useState } from "react";

// Sample job data
const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    description: "Build user interfaces using React.",
    experience: "2+ years",
    employeeCount: 3,
    status: "Active",
  },
  {
    id: 2,
    title: "HR Manager",
    department: "HR",
    description: "Manage employee relations.",
    experience: "5+ years",
    employeeCount: 1,
    status: "Active",
  },
  {
    id: 3,
    title: "Marketing Intern",
    department: "Marketing",
    description: "Assist with campaigns.",
    experience: "0-1 year",
    employeeCount: 2,
    status: "Inactive",
  },
];

export const JobListingsDropdown = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleEdit = (id) => {
    alert(`Edit Job ID: ${id}`);
    setOpenDropdown(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
    setOpenDropdown(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Listings / Overview</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Experience</th>
              <th className="py-3 px-4 text-left">Employees</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-100 relative">
                <td className="py-3 px-4">{job.title}</td>
                <td className="py-3 px-4">{job.department}</td>
                <td className="py-3 px-4">{job.description}</td>
                <td className="py-3 px-4">{job.experience}</td>
                <td className="py-3 px-4">{job.employeeCount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      job.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="relative inline-block text-left">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === job.id ? null : job.id)
                      }
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      Actions ▾
                    </button>

                    {openDropdown === job.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                        <button
                          onClick={() => handleEdit(job.id)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
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
            {jobs.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No job listings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
