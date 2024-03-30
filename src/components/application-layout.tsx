import React from 'react';

export const ApplicationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header>header</header>
      <div>{children}</div>
      <footer>footer</footer>
    </>
  );
};
