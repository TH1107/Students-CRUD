import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
// import { IoLogOutOutline } from "react-icons/io5";
import { FaRegSquareCaretDown } from "react-icons/fa6";

const NavBar = () => {
    const[openMenu, setopenMenu] = useState(false);
    const handleMenu = () =>{
        setopenMenu(!openMenu);
    }
    return (
        <nav className=" h-20  flex items-center bg-gradient-to-l from-indigo-400 via-purple-500 to-pink-500 ">
            <ul className="flex items-center ml-4 px-2 rounded-md">
                <div className="text-[20px] font-bold mr-2">Menu</div>
                {openMenu ?(
                    <FaRegSquareCaretDown size={"20px"} className="cursor-pointer mt-1" onClick={handleMenu}/>
                ) :(
                    <IoMdMenu size={"20px"} className="cursor-pointer mt-1" onClick={handleMenu}/>
                )}
                {/* {openMenu &&(
                    <div className="absolute left-6 top-14 p-5 bg-pink-500 text-center text-[15px] rounded-md font-bold border-solid border-2 border-black">
                        <li className="">
                            <button className="border-solid border-2 border-black px-2 hover:bg-white transition-all duration-300 ">                              
                                List 
                            </button>
                        </li>
                        <li className="pt-5">
                            <button className="border-solid border-2 border-black px-2 hover:bg-white transition-all duration-300 ">
                                Edit
                            </button>
                        </li>
                    </div>
                )} */}
            </ul>
            {/* <div className="ml-auto flex items-center mr-4">
            <div className=" text-[20px] font-bold mr-2"> Log Out </div>
                <IoLogOutOutline size={"20px" } className="mt-1 cursor-pointer" onClick={handleMenu}/>
            </div> */}
        </nav> 
          
    );


}

export default NavBar;

    
