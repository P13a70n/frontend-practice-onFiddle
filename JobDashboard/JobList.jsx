import React from 'react';
import JobCard from './JobCard.jsx';
function JobList({ sortedJobs, onDelete }){

  return(
    <div>
    {sortedJobs.length === 0 ?( <p>No jobs found</p>) :
          ( <ul>
           {sortedJobs.map((job) =>(
            <JobCard 
             key={job.id}
             job={job}
             onDelete={onDelete}
           />
          ))}
        </ul>)}
    </div>
    );
}

export default JobList;