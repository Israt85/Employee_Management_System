import React from "react";

// Fake interview data
const interviews = [
  {
    id: 1,
    candidateName: "John Doe",
    position: "Frontend Developer",
    timeline: [
      {
        date: "2025-11-01 10:00 AM",
        type: "Phone",
        interviewer: "HR Team",
        outcome: "Passed",
        nextStep: "Technical Interview",
      },
      {
        date: "2025-11-03 02:00 PM",
        type: "Online",
        interviewer: "Tech Lead",
        outcome: "Passed",
        nextStep: "Final Interview",
      },
    ],
  },
  {
    id: 2,
    candidateName: "Jane Smith",
    position: "Backend Developer",
    timeline: [
      {
        date: "2025-11-02 11:00 AM",
        type: "Phone",
        interviewer: "HR Team",
        outcome: "Failed",
        nextStep: "Rejected",
      },
    ],
  },
  {
    id: 3,
    candidateName: "Ali Khan",
    position: "Marketing Intern",
    timeline: [
      {
        date: "2025-11-05 03:00 PM",
        type: "In-person",
        interviewer: "Marketing Head",
        outcome: "Passed",
        nextStep: "Offer",
      },
    ],
  },
];

const Interviews = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Interviews / Selection Process</h2>

      <div className="space-y-8">
        {interviews.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">
              {candidate.candidateName} - {candidate.position}
            </h3>
            <div className="border-l-2 border-blue-500 pl-4">
              {candidate.timeline.map((step, index) => (
                <div key={index} className="mb-6 relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-3 top-1.5 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </span>

                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">
                      <span className="text-gray-900">{step.date}</span> -{" "}
                      {step.type} Interview
                    </p>
                    <p className="text-gray-600">Interviewer: {step.interviewer}</p>
                    <p>
                      Outcome:{" "}
                      <span
                        className={`font-semibold ${
                          step.outcome === "Passed"
                            ? "text-green-600"
                            : step.outcome === "Failed"
                            ? "text-red-600"
                            : "text-gray-800"
                        }`}
                      >
                        {step.outcome}
                      </span>
                    </p>
                    <p>Next Step: {step.nextStep}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;
