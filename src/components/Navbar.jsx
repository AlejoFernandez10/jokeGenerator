import React from 'react'

import {FaRegLaughSquint} from 'react-icons/fa'
import FavsContainer from './FavsContainer'
import FavsCounter from './FavsCounter'
import Link from 'next/link'


const Navbar = () => {


  return (
    <header className='w-full flex justify-center pt-12'>

      <nav className='w-full max-w-[800px] flex justify-between'>

        <Link href={'/'} className='text-white text-3xl flex gap-1'>

            <FaRegLaughSquint className='text-yellow-500' />
              JokeGenerator
        </Link>
        <ul className='flex items-center gap-5'>
          
          <li className='text-gray-50'> <Link href={'/'}>Home</Link> </li>

          <li className='text-gray-50 text-2xl cursor-pointer relative'>  <FavsContainer />  </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Navbar