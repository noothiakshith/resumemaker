"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const EditResume = () => {
    const{resumeId} = useParams();
    console.log(resumeId);
  return (
    <div>page</div>
  )
}

export default EditResume