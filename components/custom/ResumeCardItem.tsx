import { Notebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ResumeCardItem = ({resume}:{resume:any}) => {
  return (
    <Link href={'/dashboard/resume/'+resume?.id+'/edit'}>
    <div>
      <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary'>
        <Notebook/>
      </div>
      <h2 className='text-center my-1'>{resume?.title}</h2>
    </div>
    </Link>
  )
}

export default ResumeCardItem