'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext(null)


const ContextProvider = ({children}) => {

  const [favs, setFavs] = useState(() => {

    let savedFavs;
    
    if (typeof window !== 'undefined') {
      savedFavs = localStorage.getItem('favs');
    }
    try {
      return savedFavs ? JSON.parse(savedFavs) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });

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