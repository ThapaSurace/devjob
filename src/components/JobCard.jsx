import React from 'react'

const JobCard = () => {
  return (
    <div className='border shadow-md rounded-xl p-4'>
       <div className='space-y-3'>
          <h1 className='text-gray-600 my-2'>Full-Time</h1>
          <h3 className='text-xl font-bold'>Senior React Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis!</p>
          <p className='text-indigo-500 mb-2'>$70K - $80K / Year</p>
       </div>

       <div className='border border-gray-100 my-5'></div>
        
        <div className='flex justify-between items-center'>
            <p className='text-orange-400'>Boston, MA</p>
            <button className='text-white bg-teal-500 p-2 rounded-md'>
                Read More
            </button>
        </div>

    </div>
  )
}

export default JobCard