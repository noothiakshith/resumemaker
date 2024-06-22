import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Brain } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { ResumeInforContext } from '@/app/context/ResumeInforContext';
function SummeryDetails() {
  const [loading, setLoading] = useState();
  const [summmery, setSummmery] = useState([]);
  const{resumeInfo,setResumeInfo}= useContext(ResumeInforContext)
  return (
    <div className="px-4 py-8">
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-600">Add a summary to your job title</p>
        <form className='mt-7'>
            <div className='flex justify-between items-end'>
                <label>Add Summery</label>
                <Button variant="outline"
                type="button" size="sm" className="border-primary text-primary flex gap-2"> 
                <Brain className='h-4 w-4' />  Generate from AI</Button>
            </div>
            <Textarea className="mt-5" required
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit">
                    </Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default SummeryDetails;
 