import React from 'react'
import GptSearchBar from './GptSearchBar'
import { GptMovieSuggestions } from './GptMovieSuggestions'
import { BACKGROUND_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
            <img className='h-screen object-cover' src={BACKGROUND_IMG}
            alt="background"/>
        </div>
      <div className=''>
          
          <GptSearchBar/>
          <GptMovieSuggestions/>
      </div>
    </>
  )
}

export default GPTSearch