import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = ({job}) => {
  return (
    <div className='border shadow-md rounded-xl p-4'>
       <div className='space-y-3'>
          <h1 className='text-gray-600 my-2'>{job.type}</h1>
          <h3 className='text-xl font-bold'>{job.title}</h3>
          <p>{job.description}</p>
          <p className='text-indigo-500 mb-2'>{job.salary} / Year</p>
       </div>

       <div className='border border-gray-100 my-5'></div>
        
        <div className='flex justify-between items-center'>
            <p className='text-orange-400'>{job.location}</p>
            <Link to={`/job/${job.id}`}>
            <button className='text-white bg-teal-500 p-2 rounded-md'>
                Read More
            </button>
            </Link>
        </div>

    </div>
  )
}

export default JobCard