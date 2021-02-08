import React from 'react';
// import RequireAuth from './RequireAuth';
import ToTop from './ToTop';

interface MiddlewaresProps {}

const Middlewares: React.FC<MiddlewaresProps> = ({}) => {
  return (
    <>
      <ToTop />
      {/* <RequireAuth /> */}
    </>
  );
};

export default Middlewares;
