'use client'

import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {MdOutlineFavoriteBorder, MdOutlineFavorite} from 'react-icons/md'
import FavCard from './FavCard'
import { Context } from '@/Context/ContextProvider'
import Link from 'next/link'
import FavsCounter from './FavsCounter'





const FavsContainer = () => {


  const [open, setOpen] = useState(false)


  const [favs] = useContext(Context)

  


  if(open === false){
    return(
      <div onClick={()=> setOpen(true)}>
      <MdOutlineFavoriteBorder  />
      <FavsCounter />
      </div>
    )
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-50">Favs</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-50 hover:text-gray-100"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="text-white">

                            {favs.map((fav)=>(

                            <li key={fav.id} onClick={()=> setOpen(false)} className='relative'>

                              <FavCard setup={fav.setup} id={fav.id} punchline={fav.punchline} />                              
                                
                              
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='min-h-[200px]  flex justify-center items-center border-t-2'>
                           <Link href={'/favs'} onClick={()=> setOpen(false)} className='text-white  border border-yellow-500 px-14 py-3 rounded-lg transition-all duration-200 hover:bg-yellow-500 hover:text-black'>Expand Favs</Link>   
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default FavsContainer