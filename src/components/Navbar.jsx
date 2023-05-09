import React from 'react'

import {FaRegLaughSquint} from 'react-icons/fa'
import FavsContainer from './FavsContainer'
import FavsCounter from './FavsCounter'


const Navbar = () => {


  return (
    <header className='w-full flex justify-center pt-12'>

      <nav className='w-full max-w-[800px] flex justify-between'>

        <div className='text-white text-3xl flex gap-1'>

            <FaRegLaughSquint className='text-yellow-500' />
              JokeGenerator
        </div>
        <ul className='flex items-center gap-5'>
          
          <li className='text-gray-50'> Liked  </li>

          <li className='text-gray-50 text-2xl cursor-pointer relative'> <FavsContainer /> <FavsCounter /> </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Navbar