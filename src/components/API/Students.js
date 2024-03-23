import React, {Component} from "react";


export class Students extends Component {
    constructor(){
        super();

        this.state = {
            students: [],
        };

        this.studentsApi = `https://thetestingworldapi.com/api/studentsDetails`;
    }

    getStudents = async () => {
        const response = await fetch(this.studentsApi);
        if(response.ok){
            const students = await response.json();
            this.setState({
                students: students,
            });            
        }
    };

    componentDidMount = () => {
        this.getStudents();
    }
    render() {
        const {students} = this.state;
        
        return(
            <div className=" w-[100%]">
                {students.map((students) =>(

                    <div className="w-[100%]" key={students.id}> 
                        <td class=" border-t py-2 px-4">{students.id}</td>
                        <td class=" border-t py-2 px-4">{students.first_name}</td>
                        <td class=" border-t py-2 px-4">{students.middle_name}</td>
                        <td class=" border-t py-2 px-4">{students.last_name}</td>
                        <td class="border-t py-2 px-4">{students.date_of_birth}</td>
                        <td class="border-t py-2 px-4 ">
                            <button class=" bg-indigo-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2 transtion-all duration-300">Edit</button>
                            <button class=" bg-pink-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transtion-all duration-300">Delete</button>
                            console.log(1);
                        </td> 
                    </div>
            ))}
            </div>
        )
    }
    
}

export default Students 