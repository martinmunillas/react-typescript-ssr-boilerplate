import React from 'react';
import Box from '../Atoms/Box';
import ErrorMessage from '../Atoms/ErrorMessage';
import Input, { MyInputProps } from '../Atoms/Input';
import Spacer from '../Atoms/Spacer';

interface LabeledInputProps extends MyInputProps {
  label: string;
  error?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}


const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <Box variant='tertiary' align='ss' padding='none' height='auto'>
      <label>{label}</label>
      <Spacer size='s' />
      <Input {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </Box>
  );
};

export default LabeledInput;
