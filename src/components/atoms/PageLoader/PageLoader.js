import React from 'react';
import './PageLoader.scss';

const PageLoader = () => {
  return (
    <div className="loader">
      <div className="spinner-border loader__spinner text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default PageLoader;
