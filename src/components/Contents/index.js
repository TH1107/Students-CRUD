import { useEffect, useState } from "react";
import {fetchAllUser} from "../services/UserService";

const Contents = () => {

    const [listUsers, setListUsers] = useState ([]);
    useEffect(() =>{

        getUsers();
    }, [])

    const getUsers = async () =>{
        let res = await fetchAllUser();

        if(res && res.data){
           
            setListUsers(res.data.data)
        }
    }

    return(
        
            <div class="container mx-auto">
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
                    {listUsers && listUsers.length>0 &&
                    
                        listUsers.map((item, index) =>{
                            return (
                                <tr key={"users-${index}"} className="w-[100%] ">
                                <td class="border-t py-2 px-4">{item.id}</td>
                                <td class="border-t py-2 px-4">{item.email}</td>
                                <td class="border-t py-2 px-4">{item.first_name}</td>
                                <td class="border-t py-2 px-4">{item.last_name}</td>
                                {/* <td class="border-t py-2 px-4">1/1/1999</td> */}
                                <td class="border-t py-2 px-4 float-end">
                                    <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2 transtion-all duration-300">Edit</button>
                                    <button class="bg-pink-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transtion-all duration-300">Delete</button>
                            </td>
                        </tr>)
                        })
                    }
                </tbody>
            </table>
            
            
            </div>
        
    );

}

export default Contents;