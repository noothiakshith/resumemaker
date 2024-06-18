"use client"
import { PlusSquare } from 'lucide-react'
import React, { use, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react';
import { createResume } from '@/lib/actions/resume.actions';


const AddResume = () => {
  const {user} = useUser();
  const[openDialog,setopenDialog]=React.useState(false);
  const [resumeTitle, setResumeTitle] = useState('');

  const onCreate = async  ()=>{
    const uuid =  await uuidv4();
    const data = ({
      id: uuid,
      title: resumeTitle,
      createdby:user?.fullName,
      createdat:new Date().toISOString(),
    })
    console.log(data);
    
  }
  return (
    <div>
      <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed' onClick={()=>setopenDialog(true)}>
      <PlusSquare/>
    </div>
    <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <p>Add a title for your new Resume</p>
        <Input className='my-2' placeholder='Resume Title' onChange={(e:any)=>setResumeTitle(e.target.value)}  />
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={()=>{setopenDialog(false)}}>Cancel</Button>
        <Button onClick={()=>{onCreate()}}>Submit</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume