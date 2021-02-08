import React from 'react';
import Box from '../Atoms/Box';
import ErrorMessage from '../Atoms/ErrorMessage';
import Spacer from '../Atoms/Spacer';
import TextArea, { MyTextAreaProps } from '../Atoms/TextArea';

interface LabeledTextAreaProps extends MyTextAreaProps {
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

const LabeledTextArea: React.FC<LabeledTextAreaProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <Box variant='tertiary' align='ss' padding='none'>
      <label>{label}</label>
      <Spacer size='s' />
      <TextArea {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </Box>
  );
};

export default LabeledTextArea;
