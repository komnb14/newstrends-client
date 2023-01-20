import React from 'react';
import Header from '~/components/Header';
import HeaderBackButton from '~/components/HeaderBackButton';
import { useGoBack } from '~/hooks/useGoBack';
import FullHeightPage from '~/components/FullHeightPage';
import AuthForm from '~/components/AuthForm';
import { ActionArgs, json } from '@remix-run/node';
import { register } from '~/lib/api/auth';
import { AppError, extractError } from '~/lib/error';
import { ThrownResponse, useCatch } from '@remix-run/react';

interface ActionData {
  text: string;
}

export const action = async ({ request }: ActionArgs) => {
  try {
    const form = await request.formData();
    const username = form.get('username');
    const password = form.get('password');

    if (typeof username === 'string' && typeof password === 'string') {
      const { result, headers } = await register({ username, password });

      return json(result, {
        headers,
      });
    }
  } catch (e) {
    const error = extractError(e);
    throw json(error, {
      status: error?.statusCode,
    });
  }
};

interface Props {
  error?: AppError;
}

const Register = ({ error }: Props) => {
  const goBack = useGoBack();
  return (
    <FullHeightPage>
      <Header title={'회원가입'} headerLeft={<HeaderBackButton onClick={goBack} />} />
      <AuthForm mode={'register'} error={error} />
    </FullHeightPage>
  );
};

export function CatchBoundary() {
  const caught = useCatch<ThrownResponse<number, AppError>>();

  return <Register error={caught.data} />;
}

export default Register;
