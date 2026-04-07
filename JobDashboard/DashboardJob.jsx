import React from 'react';

function Dashboard({jobs}){
  // how many jobs are there
 const totalJob = jobs.length;
 // how many Offer job
 const offerJob = jobs.filter(ofj => ofj.status === 'Offer').length;
 // how many Interview
 const interviewJob = jobs.filter(ofj => ofj.status === 'Interview').length;
 
 const acceptedJob = jobs.filter(ofj => ofj.status === 'Accepted').length;

 const RejectedJob = jobs.filter(ofj => ofj.status === 'Rejected').length;

 return(
     <div>
       <p>Total Job: {totalJob}</p>
       <p>Offer: {offerJob} </p>
       <p>Interview : {interviewJob}</p>
       <p>Accepted : {interviewJob}</p>
       <p>Rejected : {interviewJob}</p>
     </div>
   ); 
}

export default Dashboard;