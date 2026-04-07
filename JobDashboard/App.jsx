import React from 'react';
import { useState } from 'react';
import './styles.css';
import JobForm from './JobForm.jsx';
import JobList from './JobList.jsx';
import Dashboard from './DashboardJob.jsx';

function App() {
  const [jobs, setJobs] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showBoard, setShowBoard] = useState(false);
   const [sort, setSort] = useState('');

  
  const handleAddJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };
  
  const handleDelete = (id) =>{
    setJobs((prev) =>prev.filter((job) => job.id !== id));
  };
  
  const sortedJobs = [...jobs];
   
 if(sort === 'sortName'){
   sortedJobs.sort((a,b) => b.companyName.localeCompare(a.companyName)) // desc
 }
 if(sort === 'sortStatus'){
   sortedJobs.sort((a, b) => a.status.localeCompare(b.status))   // asc
 }
 if(sort === 'sortId'){
   sortedJobs.sort((a,b) => a.id - b.id)  // asc
 }
  
 
 
  return (
    <>
    <JobForm onAddJob={handleAddJob} />
   
    <button onClick={() => setShowList(!showList)} disabled={jobs.length === 0}>
    {showList ? "Hide list" : "Show list"}  
    </button>
    
    {showList && 
    <div>
      Sort:
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="" disabled>Select</option>
        <option value="sortName">Name</option>
        <option value="sortStatus">Status</option>
        <option value="sortId">Id</option>
      </select>
      <br />
      <JobList sortedJobs={sortedJobs} onDelete={handleDelete} />
      </div>
    }
   
    <button onClick={() => setShowBoard(!showBoard)}>
    {showBoard ? "Hide Board" : "Show Board"}  
    </button>
    {showBoard &&  <Dashboard jobs={jobs} />}
   
   
    </>
  );
}

export default App
