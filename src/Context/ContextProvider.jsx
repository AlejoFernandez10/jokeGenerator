'use client'

import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext(null)


const ContextProvider = ({children}) => {

  const [favs, setFavs] = useState([])


  return (
    <Context.Provider  value={[favs, setFavs]}>

    {children}
    
    </Context.Provider>
  )
}

export default ContextProvider