import Signup from "./Components/Pages/Signup";
import { BiWorld } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import {NavLink} from "react-router-dom"
const App = () => {
  return (
    <div className="w-screen  h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-wide drop-shadow-md">
        Welcome to the React World 
        {/* <BiWorld /> */}
        <IoLogoReact className=" w-full items-center h-[62px]" style={{color:'blueviolet'}}  />
      </h1>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-4 w-[320px] text-center border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Choose an action
        </h2>
        <NavLink to={'/signup'} className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Sign Up
        </NavLink>
        <NavLink to={'/login'} className="border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition duration-200">
          Login
        </NavLink>
      </div>
      
    </div>
  );
};

export default App;
