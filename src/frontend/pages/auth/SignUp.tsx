import React, { useState } from 'react';

import LabeledInput from '../../components/molecules/LabeledInput';
import Box from '../../components/Atoms/Box';
import Spacer from '../../components/Atoms/Spacer';
import Button from '../../components/Atoms/Button';
import Text from '../../components/Atoms/Text';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../../shared/generated/graphql';
import { useRouter } from '../../utils/hooks/useRouter';
import { mapError } from '../../utils/funcs/mapError';
import Title from '../../components/Atoms/Title';
import { useApolloClient } from '@apollo/client';

interface SignUpProps {}

type formType = {
  email: string;
  password: string;
  repeatPass: string;
};

const SignUp: React.FC<SignUpProps> = ({}) => {
  const [form, setForm] = useState<formType>({
    email: '',
    password: '',
    repeatPass: '',
  });
  const [errors, setErrors] = useState<formType>({
    email: '',
    password: '',
    repeatPass: '',
  });
  const [regsiterMutation] = useRegisterMutation();

  const router = useRouter();
  const apolloClient = useApolloClient();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await regsiterMutation({
        variables: { email: form.email, passsword: form.password },
      });
      if (!response.data?.register.errors) {
        await apolloClient.resetStore()
        router.push('/');
      } else {
        setErrors(mapError(response.data.register.errors));
      }
    } catch (error) {}
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [(e.target as HTMLInputElement | HTMLTextAreaElement).name]: (e.target as
        | HTMLInputElement
        | HTMLTextAreaElement).value,
    });
  };

  return (
    <Box
      color='primary'
      variant='primary'
      direction='row'
      padding='l'
      height='100vh'
    >
      <Box
        padding='l'
        color='white'
        variant='primary'
        width='25%'
        height='auto'
        rounded='m'
        shadow='soft'
      >
        <Title>Sign Up!</Title>
        <form onSubmit={handleSignUp}>
          <LabeledInput
            name='email'
            label='Email'
            placeholder='Email...'
            onChange={handleChange}
            value={form.email}
            error={errors.email}
          />
          <Spacer />
          <LabeledInput
            name='password'
            type='password'
            label='Password'
            placeholder='Password...'
            onChange={handleChange}
            value={form.password}
            error={errors.password}
          />
          <Spacer />
          <LabeledInput
            name='repeatPass'
            type='password'
            label='Repeat Password'
            placeholder='Repeat Password...'
            onChange={handleChange}
            value={form.repeatPass}
          />
          <Spacer />
          <Button color='black' type='submit'>
            Sign up!
          </Button>
          <Spacer />
        </form>
        <Text>
          Already have an account? <Link to='/sign-in'>Sign In!</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignUp;
