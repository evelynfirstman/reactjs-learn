  import Cards from './Cards'
  import jobs from '../../jobs.json'



function JobListings() {

  const recentJobs = jobs.slice(0, 3);
  return (
    <div className="browse-jobs">
      <div className="container">
      <h4 className='text-primary fw-bold py-4 text-center'>Browse Jobs</h4>
      <div className="row">
        {recentJobs.map((job) => (
          <Cards key={job.id} job={job} />
        ))}
        
      </div>
      </div>
    </div>
  )
}

export default JobListings