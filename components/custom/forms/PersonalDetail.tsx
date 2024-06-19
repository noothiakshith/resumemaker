"use client"
import React, { useContext, useState } from 'react';
import { ResumeInforContext } from '@/app/context/ResumeInforContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

const PersonalDetail = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInforContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value
    });
  };

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(resumeInfo); // Check the updated resumeInfo state after form submission
    // Add logic to save or process the form data
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Details</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <Label className='text-sm'>First Name</Label>
            <Input name="firstName"  onChange={handleInputChange} required />
          </div>
          <div>
            <Label className='text-sm'>Last Name</Label>
            <Input name="lastName"  onChange={handleInputChange} required />
          </div>
          <div className="col-span-2">
            <Label className='text-sm'>Job Title</Label>
            <Input name="jobTitle"  onChange={handleInputChange} required />
          </div>
          <div className="col-span-2">
            <Label className='text-sm'>Address</Label>
            <Input name="address"  onChange={handleInputChange} required />
          </div>
          <div className="col-span-2">
            <Label className='text-sm'>Phone</Label>
            <Input name="phone" onChange={handleInputChange} required />
          </div>
          <div className="col-span-2">
            <Label className='text-sm'>Email</Label>
            <Input name="email" onChange={handleInputChange} required />
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <Button type='submit' disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;