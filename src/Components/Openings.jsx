import React, { useState } from "react";

const Openings = () => {
  const [jobs] = useState([
    {
      id: 1,
      jobId: "J001",
      title: "Frontend Developer",
      department: "IT",
      type: "Full-time",
      location: "Dhaka",
      vacancies: 2,
      postingDate: "2025-11-01",
      closingDate: "2025-11-30",
      status: "Open",
      description:
        "We are looking for a skilled Frontend Developer with React.js and Tailwind CSS experience.",
    },
    {
      id: 2,
      jobId: "J002",
      title: "Backend Developer",
      department: "IT",
      type: "Full-time",
      location: "Dhaka",
      vacancies: 1,
      postingDate: "2025-11-05",
      closingDate: "2025-12-05",
      status: "Open",
      description:
        "We are looking for a Backend Developer with Node.js, Express, and MongoDB experience.",
    },
    {
      id: 3,
      jobId: "J003",
      title: "Marketing Intern",
      department: "Marketing",
      type: "Internship",
      location: "Dhaka",
      vacancies: 3,
      postingDate: "2025-11-10",
      closingDate: "2025-12-10",
      status: "On Hold",
      description:
        "Internship for marketing campaigns, social media, and content creation.",
    },
  ]);

  // Function to render status badge
  const renderStatusBadge = (status) => {
    let color = "";
    switch (status) {
      case "Open":
        color = "bg-green-100 text-green-800";
        break;
      case "Closed":
        color = "bg-red-100 text-red-800";
        break;
      case "On Hold":
        color = "bg-yellow-100 text-yellow-800";
        break;
      default:
        color = "bg-gray-100 text-gray-800";
    }
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-6 w-[850px]">
      <h2 className="text-3xl font-bold mb-6">Job Openings / Positions</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Job ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Title</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Department</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Type</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Location</th>
              <th className="py-3 px-4 text-center text-sm font-medium text-gray-700">Vacancies</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Posting Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Closing Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Description</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={job.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
              >
                <td className="py-3 px-4 text-sm">{job.jobId}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{job.title}</td>
                <td className="py-3 px-4 text-sm">{job.department}</td>
                <td className="py-3 px-4 text-sm">{job.type}</td>
                <td className="py-3 px-4 text-sm">{job.location}</td>
                <td className="py-3 px-4 text-center text-sm">{job.vacancies}</td>
                <td className="py-3 px-4 text-sm">{job.postingDate}</td>
                <td className="py-3 px-4 text-sm">{job.closingDate}</td>
                <td className="py-3 px-4">{renderStatusBadge(job.status)}</td>
                <td className="py-3 px-4 text-sm">
                  {job.description.length > 60
                    ? job.description.substring(0, 60) + "..."
                    : job.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Openings;
