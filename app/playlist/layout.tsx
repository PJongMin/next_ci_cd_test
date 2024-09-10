import React from 'react';

const layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      layout 먼저
      {children}
    </div>
  );
};

export default layout;
