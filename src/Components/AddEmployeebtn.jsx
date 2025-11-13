import React from 'react'
import { AddEmployeeModal } from './AddEmployeeModal'

export const AddEmployeebtn = () => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="border rounded p-2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Employee</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box w-full h-96">
    <AddEmployeeModal></AddEmployeeModal>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}
