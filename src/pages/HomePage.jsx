import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import {Helmet} from 'react-helmet'

const HomePage = () => {
  return (
    <>
    <Helmet><title>JobFolio</title></Helmet>
    <Hero as="section" title="Find Developer Jobs" subtitle="Join the fastest growing marker out there!" />
    <HomeCards as="section" />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage