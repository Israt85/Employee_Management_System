import React, { useState } from "react";

// Sample job and applicant data
const jobs = [
  { id: 1, title: "Frontend Developer", department: "Engineering" },
  { id: 2, title: "HR Manager", department: "HR" },
  { id: 3, title: "Marketing Intern", department: "Marketing" },
];

const applicants = [
  { id: 1, name: "Alice", jobId: 1, status: "Pending" },
  { id: 2, name: "Bob", jobId: 1, status: "Reviewed" },
  { id: 3, name: "Charlie", jobId: 2, status: "Pending" },
  { id: 4, name: "David", jobId: 3, status: "Rejected" },
  { id: 5, name: "Eva", jobId: 1, status: "Accepted" },
];

export const JobApplicationStatus = () => {
  // Count applicants per job
  const jobApplicationCounts = jobs.map((job) => {
    const count = applicants.filter((app) => app.jobId === job.id).length;
    return { ...job, applicantCount: count };
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Application Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Number of Applicants</th>
            </tr>
          </thead>
          <tbody>
            {jobApplicationCounts.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{job.title}</td>
                <td className="py-3 px-4">{job.department}</td>
                <td className="py-3 px-4 font-semibold">{job.applicantCount}</td>
              </tr>
            ))}
            {jobApplicationCounts.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No job applications available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
