import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title="Find Developer Jobs" subtitle="Join the fastest growing marker out there!" />
    <HomeCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage