import JobListing from './JobListing'
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
import Spinner  from './Spinner'

const JobListings = ({isHome = false}) => {

const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchJobs = async () => {

    try {
      const APIUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      const res = await fetch(APIUrl)
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs', error);
    } finally {
      setLoading(false);
    } 
  }

  fetchJobs();
}, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
      
        {loading ? (<Spinner loading={loading} />) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            {jobs.map((job) => (
                <JobListing key={job.id} job={job} />  
            ))}
          </div>
        )}

      </div>  
    </section>
  )
}

JobListings.propTypes = {
    isHome: PropTypes.bool.isRequired
}

export default JobListings