
import ContainerFavsPage from './ContainerFavsPage'
import React from 'react'


const page = () => {

 
 

  return (
    <div className=' text-white w-full flex  justify-center '>
      
      <div className='w-[95%] max-w-[800px] flex flex-col '>
        <h1 className='mt-20 text-3xl mb-10 font-semibold'>Favs</h1>

        <ContainerFavsPage />
        
      </div>
    </div>
  )
}

export default page