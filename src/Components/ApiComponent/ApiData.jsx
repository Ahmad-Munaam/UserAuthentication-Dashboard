import React from 'react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LuFileSearch } from "react-icons/lu";
const ApiData = memo( () => {
    const uiData=useSelector(state=> state.formReducer.apiUiData)
    const navigate=useNavigate()
    return (
        <div className='w-full text-center'>
            <h1 className=' text-3xl font-bold  border-gray-500 font-serif italic'>Data You Got </h1>
            <div className=" w-full m-3 items-center">
                {(uiData=='') ? <div className='w-full flex justify-center'><LuFileSearch className=' size-10 m-2'/></div> :
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
                    {
                        uiData?.map((value) => {
                            return (
                                <li key={value.id} className='place-items-center'>
                                    <div className=' text-sm mb-2 underline '>
                                        Title:<p className='font-bold'> {value.title}</p>
                                    </div>
                                    <img src={value.image} alt="Image Not Found"
                                        className=' w-[260px] h-[260px] mt-3 bg-gray-300 p-2 rounded-lg items-center shadow-xl ' onClick={()=>{
                                            navigate(`/dashboard/${value.id}`, { state : {value}})
                                        }}  /> 
                                </li>
                            )
                        })
                    }
                </ul>
}
            </div>
        </div>
    )
})
export default ApiData