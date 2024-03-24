import React from "react"
import { deleteStudent } from "./services/UserService"
import { toast } from "react-toastify"

export const DeleteStudents=({confirmDelete,setOpenDelete,dataStudentDelete,handleDeleteLoad}) =>{

        const handleDelete = async () =>{
            let res = await deleteStudent(dataStudentDelete.id)
            if(res && +res.status === 204){
                toast.success("Xoá thành công")
                setOpenDelete(false)
                handleDeleteLoad(dataStudentDelete)
            }else{
                toast.error("Eror")
            }
            
        }
    return(
      <div className="fixed bg-yellow-100 h-auto w-auto left-[35%] top-[150px] m-0 border border-gray-900 rounded-md">
        <div className= "z-0 py-5 px-10">
        <div className="border-b border-gray-900/10 pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">Delete Students </h2>
            Bạn có chắc chắn xóa email:   <br /> <b> {dataStudentDelete.email} </b>
          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
            </div>
          </div>
        </div>
          <div className="flex justify-between "	>
            <button className="  bg-green-600 mr-5  text-center  w-[82px]  h-[40px] p-0 relative rounded" onClick={()=>{
              setOpenDelete(false)
            }}>
              Close
            </button>
            <button className=" bg-red-600 text-center  w-[82px]  h-[40px] p-0 relative rounded" onClick={()=>{
              handleDelete()
            }}>
              Confirm
            </button>
          </div>
        </div>  
      </div>
    )
    
}