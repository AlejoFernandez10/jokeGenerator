'use client'

import React,{useContext, useState}  from 'react'
import { Context } from '@/Context/ContextProvider'
import {MdOutlineFavorite, MdOutlineFavoriteBorder} from 'react-icons/md'
import Link from 'next/link'
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerFavsPage = () => {

  const [favs, setFavs] = useContext(Context)
  


  const handleDelete = (id)=>{

    setTimeout(()=>{

      const newItems = favs.filter((fav) => fav.id !== id);
      setFavs(newItems)
      toast.error('Unfaved!', {
        position: "top-center",
        autoClose: 1400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    },400)

  }

  if(favs.length > 0){

    return (
      
      <>
        <h1 className='mt-20 text-3xl mb-10 font-semibold'>Favs</h1>
        <div className='flex flex-col gap-5'>
      
        {favs.map((fav)=>(
        
          <div  key={fav.id}  className='mt-10 w-full flex justify-between '>
          <Link href={`/favs/${fav.id}`} className='flex flex-col gap-1'>
              <p className='text-base text-gray-400 flex flex-col gap-1.5 '> <span className='text-white'>Setup:</span> {fav.setup} </p>
        
           <p className='text-sm text-gray-500'>{fav.punchline} </p>
           </Link>
        
        
           <div>
            <button className='text-xl cursor-pointer text-yellow-500 ' onClick={(()=>  handleDelete(fav.id))} >X </button>
           </div>
        </div>
        ))}

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
      </>
    )
  }else{
    return(
      <div className='flex flex-col gap-5'>
  
        <h1 className='pt-40 text-center text-xl font-semibold'>No favs yet...</h1>
  
      </div>
    )
  }

}

export default ContainerFavsPage