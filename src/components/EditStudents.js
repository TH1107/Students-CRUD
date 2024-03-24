import React, { useEffect, useState } from "react"
import { updateStudents } from "./services/UserService"
import { toast } from "react-toastify"
export const EditStudents=({ setOpenEditStudents,dataStudentEdit,show,handleEditTable, handleClose }) =>{
 
  const [name, setName] = useState("")
  const [job, setJob] = useState("")

  const handleEditStudents = async () =>{
    let res = await updateStudents(name, job);
    if(res && res.data.updatedAt){
      handleEditTable({
        first_name:name,
        id:dataStudentEdit.id
      })

      setOpenEditStudents(false)
      toast.success("Cập Nhật Thành Công !!!")
    }
  }
  useEffect(()=>{
    if (show){   
        setName( dataStudentEdit.first_name)
    }
  }, [dataStudentEdit,show])

    return(
      <div className="fixed bg-yellow-100 h-[400px] top-[100px] w-auto left-[25%] m-0 border border-gray-900 rounded-md">
        <div className= "z-0 py-5 px-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Students </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={ name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="given-name"
                  className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Job
              </label>
              <div className="mt-2">
                <input
                  id="job"
                  name="job"
                  type="text"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                  autoComplete="job"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
</div>
          <div className="flex justify-between"	>
            <button className="  bg-green-600   text-center  w-[120px]  h-[40px] p-0 relative rounded" onClick={()=>{
              handleEditStudents()
            }}>
              Save Changes
            </button>
            <button className=" bg-red-600 text-center  w-[82px]  h-[40px] p-0 relative rounded" onClick={()=>{
              setOpenEditStudents(false)
            }}>
              Cancel
            </button>
          </div>
        </div>  
      </div>
    )
    
}