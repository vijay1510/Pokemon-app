import React from 'react';

export const Loader = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin'></div>
    </div>
  );
};
