import React from 'react'

export default function Navbar() {
  return (
    <> 
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 backdrop-blur-lg bg-blue-300 fixed'>
    <div className='flex justify-between'>
      <h1 className='text-2xl text-white cursor-pointer font bold'>Word<span className='text-red-600 text-3xl'>To</span>PDF</h1>
      <h1 className='text-2xl mt-1 text-white cursor-pointer font bold hover:scale-110 duration-300'>Home</h1>
    </div>
    </div>
    </>
  );
}
