import React from 'react'
import {MdOutlineFavorite} from 'react-icons/md'
import Link from 'next/link'


const FavCard = ({setup, punchline}) => {

  const jokeExample ='Did you hear Renault and Ford are going release a hyrbrid vehicle this year'

  return (
    <Link href={''} className='mt-10 w-full flex justify-between '>
      <h2 className='flex flex-col'>Setup:
          <p className='text-sm text-gray-400'>{setup.slice(0,39)}... </p>

       <p className='text-sm text-gray-500'>{punchline.slice(0,20)}... </p>
       </h2>


       <div>
        <MdOutlineFavorite className='text-yellow-500 text-xl' />
       </div>
    </Link>
  )
}

export default FavCard