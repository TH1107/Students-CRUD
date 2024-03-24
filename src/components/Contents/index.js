import { useEffect, useState } from "react";
import {fetchAllUser} from "../services/UserService";
import { AddNew } from "../AddNew";
import { EditStudents} from "../EditStudents"
import { DeleteStudents } from "../DeleteStudents";
import _ from "lodash"

const Contents = () => {

    const [listStudents, setlistStudents] = useState ([]);

    const [ openAddNewStudents,setOpenAddNewStudents ] = useState(false)

    const [ openEditStudents, setOpenEditStudents] = useState(false)
    const [ dataStudentEdit, setDataStudenEdit] = useState({})

    const [ openDelete, setOpenDelete] = useState(false)
    const [dataStudentDelete, setDataStudentDelete] = useState({})

    const handleClose = () =>{
      setOpenAddNewStudents(false)
      setOpenEditStudents(false)
      setOpenDelete(false)
    }
    const handleEditStudents =(user)=>{
        setDataStudenEdit(user)
        setOpenEditStudents(true)
    }
    const handleUpdateTable = (user) =>{
        setlistStudents([user, ...listStudents])
    }

    const handleEditTable = (user) =>{
        let cloneListStudents = _.cloneDeep(listStudents)
        let index = listStudents.findIndex(item => item.id === user.id)
        cloneListStudents[index].first_name = user.first_name
        setlistStudents(cloneListStudents)

    }
    useEffect(() =>{
        getUsers();
    }, [])

    const getUsers = async () =>{
        let res = await fetchAllUser();
        if(res && res.data){   
            setlistStudents(res.data.data)
        }
    }

    const handleDeleteStudents = (user) =>{
        setOpenDelete(true)
        setDataStudentDelete(user)
    }

    const handleDeleteLoad = (user) => {
        let cloneListStudents = _.cloneDeep(listStudents)
        cloneListStudents = cloneListStudents.filter(item => item.id !== user.id)
        setlistStudents(cloneListStudents)
    }
    return(
        
            <div class="container mx-auto">
                <div className='my-5 pl-4 font-bold flex justify-between	'>
                    <span>List Students</span>
                    <button class="bg-white hover:bg-green-500 border-solid border-2 border-black font-bold py-1 px-2 rounded mr-2 transtion-all duration-300 relative cursor-pointer " onClick={()=> {
                        setOpenAddNewStudents(true)
                    }}> 
                        Add New Students
                    </button>
                        {openAddNewStudents && <AddNew openAddNemStudents={openAddNewStudents} setOpenAddNewStudents={handleClose} handleUpdateTable={handleUpdateTable}/>}
                        
                </div>
                <table class=" w-[100%]  bg-white border border-gray-200">
                    <thead>
                        <tr id="students-details">
                            <th class="text-left py-2 px-4">ID</th>
                            <th class="text-left py-2 px-4">Email</th>
                            <th class="text-left py-2 px-4">FName</th>
                            <th class="text-left py-2 px-4">LName</th>
                            {/* <th class="text-left py-2 px-4">DofB</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {listStudents && listStudents.length>0 &&
                        
                            listStudents.map((item, index) =>{
                                return (
                                <tr className="w-[100%] ">
                                    <td class="border-t py-2 px-4">{item.id}</td>
                                    <td class="border-t py-2 px-4">{item.email}</td>
                                    <td class="border-t py-2 px-4">{item.first_name}</td>
                                    <td class="border-t py-2 px-4">{item.last_name}</td>
                                    {/* <td class="border-t py-2 px-4">1/1/1999</td> */}
                                    <td class="border-t py-2 px-4 float-end">
                                        <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2 transtion-all duration-300" 
                                            onClick={()=> {
                                                handleEditStudents(item)
                                            }} >Edit</button>
                                        <button class="bg-pink-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transtion-all duration-300"
                                            onClick={() =>{
                                                handleDeleteStudents(item)
                                            }}
                                        >Delete</button>
                                        
                                    </td>
                                </tr>)
                            })
                        }
                        {openEditStudents && <EditStudents 
                            openEditStudents={openEditStudents} 
                            setOpenEditStudents={handleClose} 
                            dataStudentEdit={dataStudentEdit}
                            show={true}
                            handleEditTable={handleEditTable}
                        />}
                        {openDelete && <DeleteStudents
                            openDelete = {openDelete}
                            setOpenDelete = {handleClose}
                            dataStudentDelete = {dataStudentDelete}
                            handleDeleteLoad = {handleDeleteLoad}

                        />}
                    </tbody>
                </table>
                
            
            </div>
        
    );

}

export default Contents;