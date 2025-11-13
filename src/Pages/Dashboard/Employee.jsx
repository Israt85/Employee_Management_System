import React from 'react'
import { EmployeeList } from '../../Components/EmployeeList'
import { AttendanceActivity } from '../../Components/AttendanceActivity'

export const Employee = () => {
  return (
    <div className='min-h-screen'>
      <div><EmployeeList></EmployeeList> </div>
      <div><AttendanceActivity></AttendanceActivity> </div>
    </div>
  )
}
