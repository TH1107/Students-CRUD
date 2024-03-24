
import axios from "./axios";

const fetchAllUser = () =>{
    
    return axios.get("/api/users?page=1");

}
const postAddNewStudents = (name, job) =>{
    return axios.post("/api/users",{name:name, job:job})
  }

const updateStudents = (name, job) =>{
  return axios.put("/api/users/",{name:name, job:job})
}

const deleteStudent = (id) =>{
return axios.delete(`/api/user/${id}`)
}
export {fetchAllUser,postAddNewStudents,updateStudents,deleteStudent};