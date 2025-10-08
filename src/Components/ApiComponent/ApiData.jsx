import React, { useEffect, useState } from 'react'
import axios from "axios"
const ApiData = ({ searchApi }) => {
    const [apiState, setApiData] = useState([])
    const apiLink = 'https://fakestoreapi.com/products'
    const getApiFunction = async () => {
        try {
            const ApiData = await axios.get(apiLink)
            // console.log(ApiData)
            setApiData(ApiData)
            // console.log(ApiData)
        } catch (error) {
            console.log("Error => ", error.message)
        }
    }
    useEffect(() => {
        getApiFunction()
    }, [])
    // console.log(searchApi)
    const filteredData= apiState?.data?.filter((value)=>value.title.toString().toLowerCase().includes(searchApi) ) || apiState?.data
    // console.log(filteredData)
    return (
        <div className='w-full text-center'>
            <h1 className=' text-3xl font-bold border-b-2 border-gray-500 inline'>Data You Got </h1>
            <div className=" w-full m-3 items-center">
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
                    {
                        filteredData?.map((value) => {
                            return (
                                <li key={value.id}>
                                    <div className=' text-sm mb-2 underline border-2 border-gray-600 bg-blue-500 bg-inherit'>
                                        Title:<p className='font-bold'> {value.title}</p>
                                    </div>
                                    <img src={value.image} alt="Image Not Found"
                                     className=' w-[260px] h-[260px] mt-3 bg-cyan-800 p-2 rounded-lg items-center shadow-xl ' />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default ApiData