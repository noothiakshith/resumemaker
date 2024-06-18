import { ResumeInforContext } from '@/app/context/ResumeInforContext';
import React, { useContext } from 'react';
import PersonalDetailPreview from './PersonalDetailPreview';
import SummaryPreview from './SummaryPreview';
import ProfessinalExperiencePreview from './ProfessinalExperiencePreview';
import EducationPreview from './EducationPreview';
import SkillsPreview from './SkillsPreview';

const ResumePreview = () => {
    const resumeContext = useContext(ResumeInforContext);
    const { resumeInfo, setResumeInfo } = resumeContext || { resumeInfo: null, setResumeInfo: () => {} };

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeInfo?.themeColor}}>
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            <SummaryPreview resumeInfo={resumeInfo} />
            <ProfessinalExperiencePreview resumeInfo={resumeInfo} />
            <EducationPreview resumeInfo={resumeInfo} />
            <SkillsPreview resumeInfo={resumeInfo} />
        </div>
    );
};

export default ResumePreview;
