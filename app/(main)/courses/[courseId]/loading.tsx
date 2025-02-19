import React from 'react';

import Loader from '@/components/loader';

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
