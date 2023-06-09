'use client'

import {MdOutlineFavoriteBorder} from 'react-icons/md'

import {MdOutlineFavorite} from 'react-icons/md'

import React, {useState, useContext, useEffect} from 'react'
import { Context } from '@/Context/ContextProvider'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buttons = ({setup, punchline, id , btnState}) => {



  const [btnFav, setBtnFav] = useState()

 
  const [favs, setFavs] = useContext(Context)


  


  useEffect(()=>{
    setBtnFav(false)
   
  }, [setup])

 
  const addToFavs = ()=>{

    setFavs((currentItems)=>{
      const isItem = currentItems.find((joke)=> joke.id === id)

      if(isItem){
        currentItems.map((joke)=>{

          if(joke.id === id){
            return{
              ...joke,
              qty:1
            }
          }
        })
      } else{
        return[
          {id, setup, punchline },
          ...currentItems
        ]
      }
    })

    toast.success('Check your favs!', {
      position: "top-center",
      autoClose: 1400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  

  return (
    <>
    

      <div className='mt-20 flex gap-4  items-start justify-end'>

       

       {/* FAV BUTTON */}

       <div className='relative button-container transition-all duration-200 hover:text-yellow-500 mt-0.5'>

          {btnFav ? <MdOutlineFavorite className='text-3xl cursor-pointer text-yellow-500 ' onClick={(()=> setBtnFav(false))} />  : <MdOutlineFavoriteBorder className='text-3xl cursor-pointer  ' onClick={(()=> setBtnFav(true) & addToFavs()  )} />}

          <span className='absolute bottom-[-30px] button-name text-yellow-500 '>Fav</span>
        </div>
         
      </div>
      
      <ToastContainer 
          position="top-center"
          autoClose={1400}
          limit={2}        
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      
    </>
    
  )
}

export default Buttons