import React from 'react'
import { Link } from 'react-router-dom'

function ViewAllJobs() {
  return (
    <div className='my-5'>
        <div className="container text-center">
            <Link to="/jobs" className='btn btn-secondary dark w-50'>
                View All Jobs
            </Link>
        </div>
    </div>
  )
}

export default ViewAllJobs