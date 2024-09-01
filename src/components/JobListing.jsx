import { useState, useEffect } from 'react';
import JobCard from './JobCard'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
const JobListing = ({ IsHome = false }) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const apiUrl = (IsHome) ? "api/jobs?_limit=3" : "api/jobs"
   
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.log("error fetching", error);
                setJobs([])
            } finally {
                // setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    const jobListing = (IsHome) ? jobs.slice(0, 3) : jobs
    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {IsHome ? 'Recent jobs' : 'Browse Jobs'}
                    </h2>

                    {loading ?
                        <Spinner loading={loading} />
                        :
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {
                                    jobListing.map((job) => {
                                        return <JobCard key={job.id} job={job} />
                                    })
                                }
                            </div>
                        </>
                    }


                </div>
            </section>
        </>
    )
}

export default JobListing