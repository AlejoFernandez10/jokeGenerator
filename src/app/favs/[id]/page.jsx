'use client'
import React from 'react'
import FavItemContainer from './FavItemContainer'
import {  ToastContainer} from 'react-toastify';



const page = () => {

  

  return (
    <div className='text-white w-full flex justify-center'>
      

      <FavItemContainer />
    
      <ToastContainer 
          position="top-center"
          autoClose={1400}                  
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}

export default page