'use client'
import React, {useContext, useEffect, useState} from 'react'
import { Context } from '@/Context/ContextProvider'



const FavsCounter = () => {


  const [favs, setFavs] = useContext(Context)

  const [totalFavs, setTotalFavs] = useState(0)

  useEffect(()=>{

    if(favs.length > 0){
      setTotalFavs(totalFavs + 1)

    }
  }, [favs])


  return (
    <div className='text-sm absolute top-[-7px] right-[-7px]'>{totalFavs} </div>
  )
}

export default FavsCounter