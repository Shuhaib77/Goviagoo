import React, { useState } from 'react'
import Setreview from './Setreview'

function Addreview() {
    const [add,setadd]=useState(false)
  return (
    <>
        <div className='w-100% ml-16 mr-16'>
            <div className='w-full h-[50vh] flex flex-col justify-center   ' >
                <div className='text-center '>
                <h1 className='text-5xl font-extrabold'>Share your Travel Experience in </h1>
                <h1 className='text-5xl font-extrabold mt-2'> form of a story</h1>
                </div>
                
                <div className='flex  justify-between items-center mt-20 text-center'>
                    <h1>Travelers want to see more reviews of these places.</h1>
                    <h1 className='border-2 border-black w-40 p-3  rounded-md' onClick={()=>{
                        setadd(true)
                    }}>add review</h1>
                    

                </div>
               
            </div>
             {add && <Setreview setadd={setadd}/>}
           

        </div>
    </>
  )
}

export default Addreview