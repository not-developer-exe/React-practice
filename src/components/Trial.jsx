import React, { useState } from 'react'

const Trial = () => {

    const [change, setChange] = useState(10)



  return (
    <div className='h-screen w-full bg-gray-900 flex flex-col items-center justify-center'>
        <h1 className='text-white text-3xl font-regular'>{change}</h1>
        <button onClick={()=> setChange((prev)=>prev+1)} className='px-2 py-2 mt-4 bg-blue-200 rounded-2xl scale-0.9'>Change the Value</button>

    </div>
  )
}

export default Trial