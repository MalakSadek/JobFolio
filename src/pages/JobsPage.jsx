import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
    <section className="m-auto max-w-4xl my-10 px-6">
    <JobListings isHome={false} />
    </section>
  )
}

export default JobsPage