import { useState } from "react"
import { FaMapMarker } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Cards = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(true);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className='p-2'>
          <div className="card bg-light p-3">
            <p>{job.type}</p>
            <h4>{job.title}</h4>
            <p className="mb-0 ">{description}</p>
            <span onClick={() => setShowFullDescription(prev => !prev)} className="mb-2 text-primary" >{ showFullDescription ? 'Less' : 'More' }</span>
            <span className='grey py-2'>{job.salary} / Year</span>
            <div className="d-flex justify-content-between align-end">
                <span><FaMapMarker className="text-danger me-1" />{job.location}</span>
                <Link to={`/jobs/${job.id}`} className='btn btn-primary btn-sm'>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards