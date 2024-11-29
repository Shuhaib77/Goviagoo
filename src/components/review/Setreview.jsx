import React from 'react'

function Setreview({setadd}) {
  return (
    <div>
         <div className='w-full h-full flex justify-center fixed items-center top-40 z-10 ' onClick={()=>{
            setadd(false)

         }}>
            <div className='w-1/3 bg-black h-[50vh]'>

            </div>
            <div className='w-1/2 bg-red-200 h-[50vh]'>
            <h1>gchvbnk</h1>

            </div>
            
        </div>
    </div>
  )
}

export default Setreview