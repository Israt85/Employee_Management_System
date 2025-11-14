import React from 'react'
import { DepartmentTable } from '../../Components/DepartmentTable'
import { DepartmentAnalytics } from '../../Components/DepartmentAnalytics'
import { EmployeeDistributionChart } from '../../Components/DepartmentData'

export const Department = () => {
  return (
    <div>
      <DepartmentAnalytics></DepartmentAnalytics>
      <div className='my-10'>
        <EmployeeDistributionChart ></EmployeeDistributionChart>
      </div>
      <div className='my-10'><DepartmentTable></DepartmentTable></div>
    </div>
  )
}
