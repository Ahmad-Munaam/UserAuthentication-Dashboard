import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";
const DynamicPageInfo = () => {
    const location = useLocation()
    const value = location.state.value
    console.log(value)
    const nav=useNavigate()
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-800 text-white text-center py-3">
                    <h1 className="text-2xl sm:text-3xl font-bold font-serif">
                        Detail of Selected Item
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
                    <div className="flex-shrink-0 w-full sm:w-1/2">
                        <img
                            src={value.image}
                            alt="Not Found"
                            className="w-full h-64 object-contain rounded-md bg-gray-50"
                        />
                    </div>
                    <div className="flex flex-col text-gray-800 w-full sm:w-1/2">
                        <h2 className="text-xl font-semibold mb-2 text-center sm:text-left">
                            {value.title}
                        </h2>
                        <p className="text-sm text-gray-600 italic mb-4 text-center sm:text-left">
                            {value.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700 justify-center sm:justify-start">
                            <span className="bg-yellow-100 px-3 py-1 rounded-md shadow-sm">
                                <div className=' flex justify-center items-center'>

                                    <CiStar className=' text-red-700 size-6' />
                                    Rating: {value.rating.rate}
                                </div>
                            </span>
                            <span className="bg-blue-100 px-3 py-1 rounded-md shadow-sm">
                                Total Counts: {value.rating.count}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='  w-full bg-blue-900 p-3 font-bold text-center font-serif items-center flex rounded-md justify-center'>
                    <button className=' bg-blue-950 p-2 text-center rounded-md text-white w-[260px] hover:border-gray-600 flex justify-center items-center gap-2' onClick={()=>{
                        nav(-1)
                    }}>
                        <span><IoMdArrowRoundBack className=' size-7'/> </span>
                        BACK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DynamicPageInfo
