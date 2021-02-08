import React from 'react';
import Box from '../components/Atoms/Box';
import Text from '../components/Atoms/Text';
import Title from '../components/Atoms/Title';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  console.log('asdf')
  return (
    <Box align='cc'>
      <Title>404</Title>
      <Text>Not Found</Text>
    </Box>
  );
};

export default NotFound;
