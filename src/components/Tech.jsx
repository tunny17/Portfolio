import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div>
      <h1 className='text-center balkind text-4xl font-bold tracking-widest'>
        Skills
      </h1>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
        {technologies.map((technology, index) => (
          <div
            className='border-2 flex justify-center items-center py-2 px-3 cursor-pointer hover:bg-white hover:text-[#050816] hover:border-[#050816] hover:transition-all transition-all'
            key={index}>
            <p className='balkind text-[14px] transition-all uppercase font-bold tracking-widest'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
