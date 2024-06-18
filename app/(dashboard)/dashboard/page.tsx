"use client"
import AddResume from '@/components/custom/AddResume';
import React, { useEffect, useState } from 'react';
import { getResume } from '@/lib/actions/resume.actions'; 
import ResumeCardItem from '@/components/custom/ResumeCardItem';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const [resumeList, setResumeList] = useState<{ id: string; title: string; user_id: number | null; createdby: string | null; createdat: Date; }[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getResume(); 
        if (resp) {
          setResumeList(resp);
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(resumeList); 
  }, [resumeList]); 

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start creating the AI resume for the next job</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <AddResume />
        {resumeList.length&&resumeList.map((resume,index)=>{
          return(
            <ResumeCardItem key={index} resume={resume}/>
          )
        })}
      </div>
    </div>
  );
};

export default Dashboard;
