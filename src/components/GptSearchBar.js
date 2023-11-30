import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConst'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null)

    const searchMovieTmdb = async(movieName) =>{
        console.log("mn", movieName)
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json()

        return json.results
    }

    const handleGptSearchClick = async()=>{
        console.log(searchText.current.value)

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value + " give me name of 5 movies ,comma separated"
        
        // const gptResult = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        // });

        // console.log(gptResult.choices?.[0].message?.content)
        const dummyData =  "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"
        // const gptMovies = gptResult.choices?.[0].message?.content.split(",")
        
        const gptMovies = dummyData.split(",")

        const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie))

        const tmdbResults = await Promise.all(promiseArray)
        console.log(tmdbResults)
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults:tmdbResults}))
    }

    

  return (
    <div className='pt-[45%] md:pt-[15%] flex justify-center '>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar