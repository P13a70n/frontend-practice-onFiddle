import React from 'react';
import {useState} from 'react';
import JobCard from './JobCard.jsx';
function JobList({ jobs, onDelete }){
 const [sort, setSort] = useState('');
 
 const sortedJobs = [...jobs];
 
 if(sort === 'sortName'){
   sortedJobs.sort((a,b) => b.companyName.localeCompare(a.companyName)) // desc
 }
 if(sort === 'sortStatus'){
   sortedJobs.sort((a, b) => a.status.localeCompare(b.status))   // asc
 }
 if(sort === 'sortId'){
   sortedJobs.sort((a,b) => a - b)  // asc
 }
  
  return(
    <div>
      Sort:
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="" disabled>Select</option>
        <option value="sortName">Name</option>
        <option value="sortStatus">Status</option>
        <option value="sortId">Id</option>
      </select>
      <br />
      
      {sortedJobs.length === 0 ? <p>No jobs found</p> :
           <ul>
           {sortedJobs.map((job) =>(
            <JobCard 
             key={job.id}
             job={job}
             onDelete={onDelete}
           />
          ))}
        </ul>}
      
    </div>
    
    );
}

export default JobList;