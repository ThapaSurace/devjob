import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <div className='border shadow-md rounded-xl p-8 max-w-lg w-full'>
            <h1 className='text-teal-400 font-semibold text-3xl text-center'>
                Register
            </h1>

            <form className='space-y-2'>
                <div className='space-y-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='space-y-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button className='bg-teal-500 text-white w-full py-2 rounded-md'>
                    Register
                </button>

                <p className='text-sm mt-4'>Already has an account? 
                    <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Register