import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin border-t-primary"></div>
    </div>
  );
};

export default Loading;
