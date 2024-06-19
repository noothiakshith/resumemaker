"use client"
import React, { useEffect, useState } from 'react';
import { ResumeInforContext } from '@/app/context/ResumeInforContext';
import dummy from '@/app/data/dummy';
import FormSection from '@/components/custom/FormSection';
import ResumePreview from '@/components/custom/ResumePreview';
import { useParams } from 'next/navigation';

const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState(dummy); // Initialize with dummy data

  useEffect(() => {
    // Load resume data based on resumeId or other logic
    // For now, using dummy data as an example
    setResumeInfo(dummy);
  }, [resumeId]); // Ensure useEffect runs when resumeId changes

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      <ResumeInforContext.Provider value={{ resumeInfo, setResumeInfo }}>
        <FormSection />
        <ResumePreview />
      </ResumeInforContext.Provider>
    </div>
  );
};

export default EditResume;
