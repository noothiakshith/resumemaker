import AddResume from '@/components/custom/AddResume'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-32">
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p>Start Createing the AI resume for the next job</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            <AddResume/>
        </div>
    </div>
  )
}

export default Dashboard