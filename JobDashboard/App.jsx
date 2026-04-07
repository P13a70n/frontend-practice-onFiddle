import React from 'react';
import { useState } from 'react';
import JobForm from './JobForm.jsx';
import JobList from './JobList.jsx';
import Dashboard from './DashboardJob.jsx';

function App() {
  const [jobs, setJobs] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showBoard, setShowBoard] = useState(false);
  
  const handleAddJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };
  
  const handleDelete = (id) =>{
    setJobs((prev) =>prev.filter((job) => job.id !== id));
  };
  
 
 
  return (
    <>
    <JobForm onAddJob={handleAddJob} />
   
    <button onClick={() => setShowList(!showList)}>
    {showList ? "Hide list" : "Show list"}  
    </button>
    
    {showList &&  <JobList jobs={jobs} onDelete={handleDelete} />}
   
    <button onClick={() => setShowBoard(!showBoard)}>
    {showBoard ? "Hide Board" : "Show Board"}  
    </button>
    {showBoard && <Dashboard jobs={jobs} />}
   
   
    </>
  );
}

export default App
