import React from 'react'
import trip1 from '../assets/images/43d22d3d555da8ceba9cf42b5a5ec506.jpg'

import { IoStarSharp } from 'react-icons/io5'

function Cards() {
  return (
    <>
      <div className='CardsContainer bg-gray-50 w-full h-[90%] p-4' >
        <div className='text-center mb-4'>
          <h2 className='text-2xl font-bold'>Choose your trip</h2>
          <h2 className='text-xl text-gray-600'>Popular Tours</h2>
        </div>
        <div className='topCards grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]'>
          <div className='card1 bg-cover bg-center shadow-lg rounded-lg overflow-hidden w-full md:col-span-2' style={{ backgroundImage: `url(${trip1})`, objectFit: 'cover' }}>
            <div className='p-4 relative'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded rotate-90 absolute right-0'>250$</button>
              <div className='mt-2'>
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <h2 className='text-gray-400 text-sm ml-2'>Reviews</h2>
                </div>
                <h2 className='text-lg font-semibold mt-2'>Luxor</h2>
              </div>
            </div>
          </div>
          <div className='card2 bg-cover bg-center shadow-lg rounded-lg' style={{ backgroundImage: `url(${trip1})`, objectFit: 'cover' }}>
            <div className='p-4 relative'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded rotate-90 absolute right-0'>250$</button>
              <div className='mt-2'>
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <h2 className='text-gray-400 text-sm ml-2'>Reviews</h2>
                </div>
                <h2 className='text-lg font-semibold mt-2'>Luxor</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='bottomCards grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 h-[220px]'>
          <div className='card1 bg-cover bg-center shadow-lg rounded-lg overflow-hidden' style={{ backgroundImage: `url(${trip1})`, objectFit: 'cover' }}>
            <div className='p-4 relative'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded rotate-90 absolute right-0'>250$</button>
              <div className='mt-2'>
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <h2 className='text-gray-400 text-sm ml-2'>Reviews</h2>
                </div>
                <h2 className='text-lg font-semibold mt-2'>Luxor</h2>
              </div>
            </div>
          </div>
          <div className='card1 bg-cover bg-center shadow-lg rounded-lg overflow-hidden' style={{ backgroundImage: `url(${trip1})`, objectFit: 'cover' }}>
            <div className='p-4 relative'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded rotate-90 absolute right-0'>250$</button>
              <div className='mt-2'>
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <h2 className='text-gray-400 text-sm ml-2'>Reviews</h2>
                </div>
                <h2 className='text-lg font-semibold mt-2'>Luxor</h2>
              </div>
            </div>
          </div>
          <div className='card1 bg-cover bg-center shadow-lg rounded-lg overflow-hidden' style={{ backgroundImage: `url(${trip1})`, objectFit: 'cover' }}>
            <div className='p-4 relative'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded rotate-90 absolute right-0'>250$</button>
              <div className='mt-2'>
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <h2 className='text-gray-400 text-sm ml-2'>Reviews</h2>
                </div>
                <h2 className='text-lg font-semibold mt-2'>Luxor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards