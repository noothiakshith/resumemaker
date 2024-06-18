import React from 'react';

interface Props {
  resumeInfo: {
    themeColor?: string;
    experience?: {
      title: string;
      companyName: string;
      city: string;
      state: string;
      startDate: string;
      endDate: string;
      currentlyWorking: boolean;
      workSummary: string; // corrected typo in 'workSummery' to 'workSummary'
    }[];
  };
}

const ProfessinalExperiencePreview: React.FC<Props> = ({ resumeInfo }) => {
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2' style={{ color: resumeInfo?.themeColor }}>
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className='my-5'>
          <h2 className='text-sm font-bold' style={{ color: resumeInfo?.themeColor }}>
            {experience?.title}
          </h2>
          <div className='flex justify-between text-xs'>
            <div>
              <span className='mr-1'>{experience?.companyName}</span>
              <span className='mr-1'>{experience?.city}</span>
              <span>{experience?.state}</span>
            </div>
            <div>
              <span>
                {experience?.startDate} to {experience?.currentlyWorking ? 'Present' : experience.endDate}
              </span>
            </div>
          </div>
          <p className='text-xs my-2'>{experience?.workSummary}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessinalExperiencePreview;
