'use client'


import React , {useState, useContext} from 'react'
import {MdOutlineFavorite, MdOutlineFavoriteBorder} from 'react-icons/md'
import Link from 'next/link'
import { Context } from '@/Context/ContextProvider'
import { toast,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FavCard = ({setup, punchline, id}) => {

  const [btnFav, setBtnFav] = useState()

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

  return (
    <div className='mt-10 w-full flex justify-between '>
      <Link href={`/favs/${id}`} className='flex flex-col'>Setup:
          <p className='text-sm text-gray-400'>{setup.slice(0,39)}... </p>

       <p className='text-sm text-gray-500'>{punchline.slice(0,20)}... </p>
       </Link>


       <div>
       {btnFav ?  <MdOutlineFavoriteBorder className='text-xl cursor-pointer absolute right-0 top-0 '  /> :  <MdOutlineFavorite className='text-xl cursor-pointer text-yellow-500 absolute right-0 top-0' onClick={(()=> setBtnFav(true) & handleDelete(id))} />}
       </div>
    </div>
  )
}

export default FavCard