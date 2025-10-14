import React, { useState, useEffect } from 'react'
import { IoHome } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import ApiData from '../ApiComponent/ApiData';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addrealData } from '../../DataStore/formSlice';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
const Dashboard = () => {
    const dispatch = useDispatch()
    // const uiData=useSelector(state=> state.formReducer.apiUiData)
    const [searchApi, setSearchApi] = useState('')
    const [apiFilteredState, setApiFilteredState] = useState([])
    const [ApiState, setApiState] = useState([])
    const [module, setmodule] = useState(false)
    const location = useLocation()

    const backNavigation = useNavigate()
    const [menu, setmenu] = useState(false)
    const profNavigate = useNavigate()
    console.log(location)

    const apigetfunction = async () => {
        const apiLink = 'https://fakestoreapi.com/products'
        try {
            const ApiData = await axios.get(apiLink)
            setApiState(ApiData)
            const filteredData = await ApiState.data?.filter((v) => v.title.toString().toLowerCase().includes(searchApi))
            setApiFilteredState(filteredData)
            console.log(apiFilteredState)
            dispatch(addrealData(filteredData))
        }
        catch (error) {
            console.log("Error => ", error.message)
        }
    }
    useEffect(() => {
        apigetfunction()
    }, [])

    return (
        <>
            {module ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="w-[90%] max-w-[380px] shadow-lg rounded-md bg-white text-center flex flex-col items-center justify-center p-4">
                        <p className="text-gray-800 font-semibold mb-3">
                            Are you sure to logout?
                        </p>
                        <div className="flex gap-6">
                            <button onClick={() => setmodule(false)} className="p-2">
                                <MdCancel className="size-8 hover:scale-110 text-red-600" />
                            </button>
                            <button onClick={() => backNavigation('/login')} className="p-2">
                                <TiTick className="size-10 hover:scale-110 text-green-600" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-screen h-screen bg-gray-100 text-gray-800 flex flex-col overflow-hidden">
                    <nav className="relative flex grid-cols-3 sm:flex-row sm:justify-between items-center bg-white px-6 py-3 shadow-md w-full text-center border-b border-gray-200">
                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                            <IoHome className="text-gray-700 size-7" />
                            <span className="text-lg font-semibold text-gray-800">React World</span>
                        </div>

                        <h1 className='text-3xl font-bold font-serif  rounded-lg p-2 text-gray-800 italic'>
                            DASHBOARD
                        </h1>

                        {menu ? (
                            <div className="relative">
                                <ul className="absolute right-0 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col gap-2 w-40 p-3">
                                    <li className="flex items-center justify-end text-gray-800">
                                        <RxCross2
                                            onClick={() => setmenu(!menu)}
                                            className="cursor-pointer transition hover:text-red-500"
                                        />
                                    </li>
                                    <li
                                        className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition"
                                        onClick={() => setmodule(true)}
                                    >
                                        <TbLogout className="size-5 text-gray-700" />
                                        <span>Logout</span>
                                    </li>
                                    <li className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition" onClick={() => {
                                        if (location.state == null) {
                                            toast.warning("You are not logged in ")
                                        }
                                        else {
                                            profNavigate(`/dashboard/profile`, { state: { username: location.state.username, password: location.state.password } })
                                        }
                                    }}>
                                        <CgProfile className="size-6 text-gray-700" />
                                        <span>Profile</span>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div>
                                < IoIosArrowDropdownCircle
                                    onClick={() => setmenu(!menu)}
                                    className="size-7 cursor-pointer text-gray-700 hover:text-blue-500 transition"
                                />
                            </div>
                        )}
                    </nav>

                    <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                        <aside className="w-full sm:w-[22%] bg-white p-5 overflow-y-auto border-r border-gray-200">
                            <ul className="flex flex-col gap-3 text-gray-700">

                            </ul>
                        </aside>

                        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto shadow-md shadow-gray-400">
                            <div className='w-full flex justify-center gap-2 p-2 items-center'>
                                <label hidden>Search</label>
                                <input
                                    type="text"
                                    name='searchbar'
                                    placeholder='Search Anything'
                                    value={searchApi}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setSearchApi(e.target.value.toLowerCase())
                                    }}
                                    className='focus:border-blue-500 border border-gray-300 w-full sm:w-1/2 p-2 m-1 text-gray-800 font-serif rounded-md outline-none'
                                />
                                <ImSearch
                                    className='size-6 text-gray-700 hover:text-blue-500 cursor-pointer transition'
                                    onClick={apigetfunction}
                                />
                            </div>

                            <div>
                                <ApiData />
                            </div>
                        </main>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </>
    )
}

export default Dashboard