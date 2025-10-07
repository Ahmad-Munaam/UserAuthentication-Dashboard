import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const Home = () => {
    const backNavigation = useNavigate()
    const [module, setmodule] = useState(false)
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
                            <div
                                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md cursor-pointer transition mt-2 sm:mt-0"
                                onClick={() => setmodule(true)}
                            >
                                <TbLogout className="size-5" />
                                <span>Logout</span>
                            </div>
                        </div>
                    </nav>

                    <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                        <aside className="w-full sm:w-[22%] bg-slate-700 p-5 overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 pb-2">Dashboard</h2>
                            <ul className="flex flex-col gap-3">
                                <li className="hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer">Games</li>
                                <li className="hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer">Esports</li>
                                <li className="hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer">SEGA</li>
                                <li className="hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer">FIFA</li>
                                <li className="hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer">Action</li>
                                <li className="hover:bg-slate-600 px-3 py-2 rounded-md cursor-pointer">Adventure</li>
                            </ul>
                        </aside>
                        <main className="flex-1 bg-slate-800 p-6 overflow-y-auto">
                            <h1 className="text-3xl font-bold mb-4">Rest Area</h1>
                            <p className="text-gray-300 leading-relaxed">
                                Welcome to the main dashboard area. Here you can manage your games,
                                view stats, and explore esports content.
                            </p>
                        </main>
                    </div>
                    <div className="flex justify-center py-3 bg-slate-900 border-t border-slate-700">
                        <button
                            onClick={() => backNavigation(-1)}
                            className="bg-gray-700 hover:bg-slate-600 px-6 py-2 rounded-md transition"
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home

