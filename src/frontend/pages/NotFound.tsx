import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <div>
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  );
};

export default NotFound;
