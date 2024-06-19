"use client"
import React, { useState } from 'react';
import PersonalDetail from './forms/PersonalDetail';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" size="sm" className='flex gap-2'><LayoutGrid />Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex - 1)}>Left <ArrowLeft /></Button>}
          <Button className='flex gap-2' size="sm" onClick={() => setActiveFormIndex(activeFormIndex + 1)}>Next <ArrowRight /></Button>
        </div>
      </div>
      {activeFormIndex === 1 && <PersonalDetail />}
    </div>
  );
};

export default FormSection;