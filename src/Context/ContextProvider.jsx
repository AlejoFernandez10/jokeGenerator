'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext(null)


const ContextProvider = ({children}) => {

  const [favs, setFavs] = useState(() => {
    const savedFavs = typeof window !== 'undefined' ? localStorage.getItem('favs') : null
    return savedFavs ? JSON.parse(savedFavs) : []
  })

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  return (
    <Context.Provider  value={[favs, setFavs]}>

    {children}
    
    </Context.Provider>
  )
}

export default ContextProvider