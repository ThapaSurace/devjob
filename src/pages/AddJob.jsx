import React from 'react'

const AddJob = () => {
  return (
    <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border max-w-2xl mx-auto my-10'>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

      <form className='space-y-3'>
        <div className='space-y-1'>
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            name="type"
            className='w-full'
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor='title'>Job Listing Name</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Add job title"
           
          />
        </div>
        <div className='space-y-1'>
          <label
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            rows='4'
            placeholder='Add any job duties, expectations, requirements, etc'
            
          ></textarea>
        </div>
        <div className='space-y-1'>
          <label
            htmlFor='salary'
          >
            Salary
          </label>
          <select
            id='salary'
            name='salary'
             className='w-full'
          >
            <option value='Under $50K'>Under $50K</option>
            <option value='$50K - 60K'>$50K - $60K</option>
            <option value='$60K - 70K'>$60K - $70K</option>
            <option value='$70K - 80K'>$70K - $80K</option>
            <option value='$80K - 90K'>$80K - $90K</option>
            <option value='$90K - 100K'>$90K - $100K</option>
            <option value='$100K - 125K'>$100K - $125K</option>
            <option value='$125K - 150K'>$125K - $150K</option>
            <option value='$150K - 175K'>$150K - $175K</option>
            <option value='$175K - 200K'>$175K - $200K</option>
            <option value='Over $200K'>Over $200K</option>
          </select>
        </div>

        <div className='space-y-1'>
          <label htmlFor='location'>
            Location
          </label>
          <input
            type='text'
            id='location'
            name='location'
            placeholder='Company Location'
          />
        </div>

        <h3 className='text-2xl mb-5'>Company Info</h3>
        <div className='space-y-1'>
          <label htmlFor='company'>
            Company Name
          </label>
          <input
            type='text'
            id='company'
            name='company'
            placeholder='Company Name'
          />
         </div>
        <div className='space-y-1'>
          <label htmlFor='company_description'>
            Company Description
          </label>
          <textarea
            id='company_description'
            name='company_description'
            rows='4'
            placeholder='What does your company do?'
          ></textarea>
        </div>

        <div className='space-y-1'>
          <label htmlFor='contact_email'>
            Contact Email
          </label>
          <input
            type='email'
            id='contact_email'
            name='contact_email'
            placeholder='Email address for applicants'
            
          />
          
        </div>
        <div className='space-y-1'>
          <label htmlFor='contact_phone'>
            Contact Phone
          </label>
          <input
            type='tel'
            id='contact_phone'
            name='contact_phone'
            placeholder='Optional phone for applicants'
           
          />
          
        </div>
        <div>
          <button
           
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddJob