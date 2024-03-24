import React, { useState } from "react"
import { postAddNewStudents } from "./services/UserService"
import { toast } from 'react-toastify';

export const AddNew=({openAddNemStudents, setOpenAddNewStudents,handleUpdateTable }) =>{
 
  const [name, setName] = useState("")
  // const [lname, setLName] = useState("")
  const [job, setJob] = useState("")
  // const [email, setEmail] = useState("")
 
  const handleSaveNewStudents= async () =>{
    let res = await postAddNewStudents(name, job)

    if (res && res.data.id) {

      setOpenAddNewStudents(true)
      setName("")
      setJob("")
      toast.success("Tạo Mới Thành Công !!!")
        handleUpdateTable({first_name: name, id: res.data.id})
      
    }else{
      toast.error("Tạo Mới Không Thành Công !!!")

    }
  }
    return(
      <div className="fixed bg-yellow-100 h-[400px] w-auto left-[25%] m-0 border border-gray-900 rounded-md">
        <div className= "z-0 py-5 px-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add New Student </h2>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lname}
                  onChange={(event) => setLName(event.target.value)}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
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
            <button className="  bg-green-600   text-center  w-[82px]  h-[40px] p-0 relative rounded" onClick={()=>{
              handleSaveNewStudents()
            }}>
              Save
            </button>
            <button className=" bg-red-600 text-center  w-[82px]  h-[40px] p-0 relative rounded" onClick={()=>{
              setOpenAddNewStudents(false)
            }}>
              Cancel
            </button>
          </div>
        </div>  
      </div>
    )
    
}