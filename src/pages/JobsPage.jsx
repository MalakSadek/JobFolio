import React from 'react'
import JobListings from '../components/JobListings'
import { Helmet } from 'react-helmet'

const JobsPage = () => {
  return ( 
    <>
    <Helmet><title>Available Jobs</title></Helmet>
    <section className="m-auto max-w-4xl my-10 px-6">
    <JobListings isHome={false} />
    </section>
    </>
  )
}

export default JobsPage