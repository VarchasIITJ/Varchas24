import React from 'react'

function Not_Found() {
  return (
    <div className='bg-black text-white w-screen h-screen justify-center align-middle'>
        <div className='w-screen h-screen flex flex-col justify-center'>
        <div className='text-center text-lin_404 text-yellow-400'><span className='[text-shadow:1px_1px_12px_yellow]'>404</span></div>
        <div className='text-center text-4xl '><span className='[text-shadow:1px_1px_10px_white]'>The page you are looking for is not available.</span></div>
        </div>
    </div>
  )
}

export default Not_Found