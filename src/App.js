import './App.css';
import NavBar from './components/NarBar';
import Contents from './components/Contents';
import {AddNew} from './components/AddNew';
import { useState } from 'react';

function App() {

  const [ openAddNewStudents,setopenAddNewStudents ] = useState(false)


  return (
    <div className="">
      
      <NavBar/>

      <div className='my-5 pl-4 font-bold '>
        <span>List Students</span>
          <button class="bg-white hover:bg-green-500 border-solid border-2 border-black font-bold py-1 px-2 rounded mr-2 transtion-all duration-300 fixed top-24 cursor-pointer	right-0 " onClick={()=> {
            setopenAddNewStudents(true)
          }}>
            Add New Students
          </button>
            {openAddNewStudents && <AddNew openAddNemStudents={openAddNewStudents} setOpenAddNewStudents={setopenAddNewStudents}/>}

      </div>
      <Contents/>
    </div>
  );
}

export default App;
