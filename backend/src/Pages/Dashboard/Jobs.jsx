import { JobApplicationStatus } from "../../Components/JobApplicationStatus"
import { JobListingsDropdown } from "../../Components/JobListingsDropdown"


export const Jobs = () => {
  return (
    <div>
      <JobListingsDropdown></JobListingsDropdown>

      <JobApplicationStatus></JobApplicationStatus>
          </div>
  )
}
