import React from 'react'
import { useParams,useLoaderData } from 'react-router-dom'

const JobPage = () => {   
    
    const job = useLoaderData();   

    return  ( 
    <h1>title {job.title}</h1>)
  
};

const jobLoader = async ({params}) => {    
        const res  = await fetch(`/api/jobs/${params.id}`);
        const data = await res.json();
        console.log(data);
        return data;
   
}

export  {JobPage as default,jobLoader}