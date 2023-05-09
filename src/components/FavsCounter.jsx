'use client'
import React, {useContext, useEffect, useState} from 'react'
import { Context } from '@/Context/ContextProvider'



const FavsCounter = () => {


  const [favs, setFavs] = useContext(Context)

  const [totalFavs, setTotalFavs] = useState(0)

  useEffect(()=>{

    if(favs){         
      
      setTotalFavs(favs.length)
    }
  }, [favs])


  return (
    <div className='text-sm absolute top-[-10px] right-[-10px]'>{totalFavs} </div>
  )
}

export default FavsCounter