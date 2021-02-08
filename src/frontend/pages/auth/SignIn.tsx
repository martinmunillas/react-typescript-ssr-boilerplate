import React, { useState } from 'react';

import LabeledInput from '../../components/molecules/LabeledInput';
import Box from '../../components/Atoms/Box';
import Spacer from '../../components/Atoms/Spacer';
import Button from '../../components/Atoms/Button';
import Text from '../../components/Atoms/Text';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../../shared/generated/graphql';
import { useRouter } from '../../utils/hooks/useRouter';
import { mapError } from '../../utils/funcs/mapError';
import Title from '../../components/Atoms/Title';
import { useApolloClient } from '@apollo/client';

interface SignInProps {}

type formType = {
  email: string;
  password: string;
};

const SignIn: React.FC<SignInProps> = ({}) => {
  const [form, setForm] = useState<formType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<formType>({
    email: '',
    password: '',
  });
  const [login] = useLoginMutation();

  const router = useRouter();

  const apolloClient = useApolloClient();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: form,
      });
      if (!response.data?.login.errors) {
        await apolloClient.resetStore();
        router.push('/');
      } else {
        setErrors(mapError(response.data.login.errors));
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
        <Title>Sign In!</Title>
        <form onSubmit={handleSignIn}>
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
          <Button color='black' type='submit' title='submitBtn'>
            Sign In!
          </Button>
          <Spacer />
        </form>
        <Text>
          Doesn't have an account? <Link to='/sign-up'>Sign Up!</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignIn;
