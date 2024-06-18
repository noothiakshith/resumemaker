"use client"
import { ResumeInforContext } from '@/app/context/ResumeInforContext';
import dummy from '@/app/data/dummy';
import FormSection from '@/components/custom/FormSection';
import ResumePreview from '@/components/custom/ResumePreview';
import { useParams } from 'next/navigation';

import React, { useEffect, useState } from 'react'

const EditResume = () => {
    const { resumeId } = useParams();
    console.log(resumeId);
    const [resumeInfo, setResumeInfo] = useState(dummy);
    useEffect(()=>{
      setResumeInfo(dummy)
    })

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
