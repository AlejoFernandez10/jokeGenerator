'use client'


import Buttons from '@/components/Buttons';

import axios from 'axios'
import { useState } from 'react';
import {FiRefreshCcw} from 'react-icons/fi'


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
  const [regenerateBtn, setRegenerateBtn] = useState(false)
  

    const fetchJoke = async ()=>{

      const response = await axios.request(options)
      const data = response.data

      setJoke(data.body)      
    }
    
    const activeRefreshBtn =()=>{
      setTimeout(()=>{
        setRegenerateBtn(true)
      }, 500)
    }
  
  

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between p-24 pb-10 text-white">
      
      <div className='w-[95%] min-h-[60vh] flex flex-col  justify-center  max-w-[800px]'>

      <div className='mb-20 '>
        <h1 className={`text-lg font-semibold pb-10 text-white flex flex-col gap-4 ${!joke && 'text-center'} `}> {joke && 'Setup:'} <span>{joke ?   joke.setup : 'Generate jokes and have fun!'} </span></h1>  

        <p className='text-base font-semibold gap-3  flex flex-col'>{joke && 'Punchline:'}
        <span className='text-gray-300'>{joke ? joke.punchline : ''} </span>
         </p>

        {joke &&

        <Buttons setup={joke.setup} punchline={joke.punchline} id={joke._id} />
        
        }
      </div>

        {!regenerateBtn
        
        ?
        
        <button onClick={()=> fetchJoke() &  activeRefreshBtn() } className='px-4 py-2 bg-yellow-400 rounded-lg hover:opacity-90 text-black self-center' >Generate Joke</button>  
        :
        
        <div onClick={()=> fetchJoke()} className='flex flex-col cursor-pointer justify-center items-center gap-2 transition-all duration-200 hover:text-yellow-500'>
          <FiRefreshCcw className='text-2xl  ' /> 
            Regenerate
        </div>
      }

    </div>

    
    
        
    </main> 
  )
}
