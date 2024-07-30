import React from 'react'
import { Link } from 'react-router-dom'

function HomeCards() {
  return (
    <div className="dev-emp pt-4 pb-2 bg-light">
    <div className="container ">
      <div className="row d-flex justify-content-between ">
        <div className="col-sm-6 p-1">
          <div className="dev-box rounded p-3">
          <h5>For Developers</h5>
          <p>Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
          <Link to="/jobs" className='btn btn-secondary btn-sm'>Browse Jobs</Link>
          </div>
        </div>
        <div className="col-sm-6 p-1">
          <div className="emp-box rounded p-3">
          <h5>For Developers</h5>
          <p>Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
          <Link to="/add-jobs" className='btn btn-secondary btn-sm'>Add Jobs</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeCards