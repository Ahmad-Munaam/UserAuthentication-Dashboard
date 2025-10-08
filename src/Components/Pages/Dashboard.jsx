import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import ApiData from '../ApiComponent/ApiData';
const Dashboard = () => {
    const [searchApi, setSearchApi] = useState('')
    const username = useLocation()
    const [userData, setUserData] = useState(null)
    const backNavigation = useNavigate()
    const [module, setmodule] = useState(false)
    console.log(username.state)
    const showProfile = () => {
        setUserData(username.state.username)
    }
    return (
        <>
            {module ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="w-[90%] max-w-[380px] shadow-lg rounded-md bg-blue-500 text-center flex flex-col items-center justify-center p-4">
                        <p className="text-white font-semibold mb-3">
                            Are you sure to logout?
                        </p>
                        <div className="flex gap-6">
                            <button onClick={() => setmodule(false)} className="p-2">
                                <MdCancel className="size-8 hover:scale-110" style={{ color: 'red' }} />
                            </button>
                            <button onClick={() => backNavigation('/login')} className="p-2">
                                <TiTick className="size-10 hover:scale-110" style={{ color: 'green' }} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-screen h-screen bg-slate-800 text-white flex flex-col overflow-hidden">
                    <nav className="flex flex-col sm:flex-row sm:justify-between items-center bg-slate-700 px-6 py-3 shadow-md w-full text-center">

                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                            <IoHome className="text-white size-7" />
                            <span className="text-lg font-semibold">React World</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                            <span className="hover:text-blue-400 cursor-pointer transition">Home</span>
                            <span className="hover:text-blue-400 cursor-pointer transition">Contact Us</span>
                            <span className="hover:text-blue-400 cursor-pointer transition">About</span>
                            <div className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md cursor-pointer transition mt-2 sm:mt-0"
                                onClick={() => setmodule(true)}>
                                <TbLogout className="size-5" />
                                <span>Logout</span>
                            </div>
                            <span> <NavLink to={`profile/${userData}`}>
                                <CgProfile style={{ color: 'black' }} className=' size-7' onClick={showProfile} />
                            </NavLink>
                            </span>
                        </div>
                    </nav>
                    <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                        <aside className="w-full sm:w-[22%] bg-slate-700 p-5 overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 pb-2">Dashboard</h2>
                            <ul className="flex flex-col gap-3">
                                {["Game", "ESPORTS", "FIFA", "FREEFIRE", "PUBG"]?.map((value, index) => {
                                    return (
                                        <li key={index} className='hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer'>{value}</li>
                                    )
                                })
                                }
                            </ul>
                        </aside>
                        <main className="flex-1 bg-slate-800 p-6 overflow-y-auto">
                            <h1 className="text-3xl font-bold mb-4">Rest Area</h1>
                            <Outlet />
                            {userData !== '' && <p>{userData}</p>}
                            <p className="text-gray-300 leading-relaxed">
                                Welcome to the main dashboard area. Here you can manage your games,
                                view stats, and explore esports content.
                            </p>
                            <div className='w-full flex justify-center gap-2 p-2 items-center'>
                                <label hidden >Search</label>
                                <input type="text" name='searchbar' placeholder='Search Anything' value={searchApi} onChange={(e) => {
                                    e.preventDefault()
                                    setSearchApi(e.target.value.toLowerCase())
                                }} className=' focus:border-blue-700 w-full sm:w-1/2 p-2 m-1 text-slate-700 font-serif rounded-md' />
                                <ImSearch className=' size-6' />
                            </div>
                            {/* {userData !== '' && <p>{userData}</p>} */}
                            <div>
                                <ApiData searchApi={searchApi} />
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}

export default Dashboard

