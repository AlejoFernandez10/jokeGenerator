'use client'
import React,{useContext}  from 'react'
import { Context } from '@/Context/ContextProvider'
import {MdOutlineFavorite} from 'react-icons/md'
import Link from 'next/link'


const ContainerFavsPage = () => {

  const [favs, setFavs] = useContext(Context)

  return (
    
    
    <div className='flex flex-col gap-5'>

    {favs.map((fav)=>(

      <Link key={fav.id} href={`/favs/${fav.id}`} className='mt-10 w-full flex justify-between '>
      <h2 className='flex flex-col gap-1'>
          <p className='text-base text-gray-400 flex flex-col gap-1.5 '> <span className='text-white'>Setup:</span> {fav.setup} </p>

       <p className='text-sm text-gray-500'>{fav.punchline} </p>
       </h2>


       <div>
        <MdOutlineFavorite className='text-yellow-500 text-xl' />
       </div>
    </Link>
    ))}

    </div>
  )
}

export default ContainerFavsPage