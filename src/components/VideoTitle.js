import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-6 md:px-24  pb-4 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='texl-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-8 text-lg w-1/3'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black md:py-2 md:px-12 px-2 py-1 text-lg hover:bg-opacity-80 rounded-lg'> Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-12 text-lg  rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle