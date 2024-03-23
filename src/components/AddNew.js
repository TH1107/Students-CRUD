import React from "react"

export const AddNew=({openAddNemStudents, setOpenAddNewStudents}) =>{
    return(
      <div>
        <div className="bg-yellow-100 z-0 mt-5">
          
          <div flex justify-between	>
            <button className=" box-border cursor-pointer  items-center inline-flex w-[82px]  h-[40px] px-0 py-4 relative	">
              send
            </button>
            <button className=" box-border cursor-pointer  items-center inline-flex w-[82px]  h-[40px] px-0 py-4 relative" onClick={()=>{
              setOpenAddNewStudents(false)
            }}>
              cancel
            </button>
          </div>
        </div>  
      </div>
    )
    
}