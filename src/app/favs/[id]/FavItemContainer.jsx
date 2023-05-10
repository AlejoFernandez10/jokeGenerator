'use client'
import React, {useContext} from 'react'

import {useParams, useRouter} from 'next/navigation'
import { Context } from '@/Context/ContextProvider'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavItemContainer = () => {

    const params = useParams()
    const router = useRouter()

    const [favs, setFavs] = useContext(Context)
    

    const favFiltered = favs.filter((item) => item.id === params.id)
   
     

  

    return (
      <div  key={favFiltered[0].id}  className=' w-full max-w-[800px] flex justify-between pt-40 '>
            <div  className='flex flex-col gap-5'>
                <p className='text-xl  text-gray-400 flex flex-col gap-1.5 '> <span className='text-white'>Setup:</span> {favFiltered[0].setup} </p>
          
             <p className='text-lg text-gray-500 '>{favFiltered[0].punchline} </p>
             </div>
          
          
          </div>
    )

    
}

export default FavItemContainer
