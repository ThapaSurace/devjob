import React from 'react'

const Navbar = () => {
    const user = false
  return (
    <div className='border shadow-md p-4'>
       <div className='flex justify-between max-w-6xl mx-auto'>
          {/* left */}
          <div className='text-2xl font-bold'>Dev Jobs</div>

          {/* middle */}
          <ul className='flex gap-4 font-semibold text-lg'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Add Jobs</li>
          </ul>

          {/* right */}
          <div className='flex gap-4 font-semibold text-lg'>
            {
                user ? <button>Logout</button> : (
                    <>
                     <button>Regsiter</button>
                     <button>Login</button>
                    </>
                )
            }
            
          </div>
       </div>
    </div>
  )
}

export default Navbar