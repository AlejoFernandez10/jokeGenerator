'use client'


import Buttons from '@/components/Buttons';
import FavsContainer from '@/components/FavsContainer';
import axios from 'axios'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';


const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke/png',
  headers: {
    'X-RapidAPI-Key': '82226da186mshf53c92b3803a30fp11a5c4jsnb984c601f71f',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};


export default function Home() {

  const [joke, setJoke] = useState()
  
  

    const fetchJoke = async ()=>{

      const response = await axios.request(options)
      const data = response.data

      setJoke(data.body)      
    }
    
  
  

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between p-24 pb-10 text-white">
      
      <div className='w-full flex flex-col items-center justify-center min-w-[799px] max-w-[800px]'>

      <div className='mb-20 '>
        <h1 className='text-lg font-semibold pb-10 text-white flex flex-col gap-4'> {joke && 'Setup:'} <span>{joke ?   joke.setup : 'Generate jokes and have fun!'} </span></h1>  

        <p className='text-base font-semibold gap-3  flex flex-col'>{joke && 'Punchline:'}
        <span className='text-gray-300'>{joke ? joke.punchline : ''} </span>
         </p>

        {joke &&

        <Buttons setup={joke.setup} punchline={joke.punchline} id={joke._id} />
        
        }
      </div> 

      <button onClick={()=> fetchJoke() } className='px-4 py-2 bg-yellow-400 rounded-lg hover:opacity-90 text-black' >Generate Joke</button>  
    </div>

    
    
        
    </main> 
  )
}
