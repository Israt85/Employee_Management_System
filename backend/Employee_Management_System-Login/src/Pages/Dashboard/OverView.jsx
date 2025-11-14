import AttendanceDonutChart from "../../Components/AttendanceDonutChart";
import DepartmentChart from "../../Components/DepartmentChart";
import EmployeeLineChart from "../../Components/EmployeeLineChart";
import SalaryPieChart from "../../Components/SalaryPieChart";

const OverView = () => {
  return (
    <div className='ml-8 w-[850px]'>
      <div className='flex mt-4 justify-between items-center'>
        <div className='text-2xl mt-2 font-semibold text-[#2b12bb]'>Analytics Overview</div>
        <div className='w-48 bg-white h-10 border flex justify-center rounded'>
          <p className='text-center text-xl'>Last 30 days</p>
          <img src="https://www.svgrepo.com/show/509905/dropdown-arrow.svg" alt="" />
        </div>
      </div>

      <div className='grid grid-cols-4 my-3'>
        <div className='w-48 bg-white rounded h-32 space-y-3 border text-center mx-auto'>
          <h1 className='text-2xl mt-2 text-[#2b12bb]'>Total Employees</h1>
          <p className='text-sm'>Total registered employees</p>
          <p className='text-xl'>128</p>
        </div>
        <div className='w-48 bg-white rounded h-32 space-y-3 border text-center mx-auto'>
          <h1 className='text-2xl mt-2 text-[#2b12bb]'>New Hires</h1>
          <p className='text-sm'>Employees joined this month</p>
          <p className='text-xl'>4</p>
        </div>
        <div className='w-48 bg-white rounded h-32 space-y-3 border text-center mx-auto'>
          <h1 className='text-2xl mt-2 text-[#2b12bb]'>On Leave</h1>
          <p className='text-sm'>Employees currently on leave</p>
          <p className='text-xl'>3</p>
        </div>
        <div className='w-48 bg-white rounded h-32 space-y-3 border text-center mx-auto'>
          <h1 className='text-2xl mt-2 text-[#2b12bb]'>Payroll Processed</h1>
          <p className='text-sm'>This month’s payroll status</p>
          <p className='text-xl'>Completed</p>
        </div>
      </div>

      <div className="my-10">
        <EmployeeLineChart></EmployeeLineChart>
        
      </div>
     <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-10">
  <div className="w-full md:w-1/2 flex justify-center">
   <AttendanceDonutChart></AttendanceDonutChart>
  </div>

  <div className="w-full md:w-1/2 flex justify-center">
    <SalaryPieChart width={400} height={400} />
  </div>
  
</div>
 <div className="my-10">
    <DepartmentChart width={400} height={450} />
 </div>

    </div>
  )
}

export default OverView;

