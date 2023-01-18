import React from 'react';
import styled from '@emotion/styled';
import Header from '~/components/Header';
import HeaderBackButton from '~/components/HeaderBackButton';
import { useGoBack } from '~/hooks/useGoBack';
import AuthForm from '~/components/AuthForm';
import FullHeightPage from '~/components/FullHeightPage';
import { ActionArgs, json } from '@remix-run/node';
import { login, register } from '~/lib/api/auth';

interface ActionData {
  text: string;
}
export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');

  if (typeof username === 'string' && typeof password === 'string') {
    const { result, headers } = await login({ username, password });

    return json(result, {
      headers,
    });
  }
};
const Login = () => {
  const goBack = useGoBack();
  return (
    <FullHeightPage>
      <Header title={'로그인'} headerLeft={<HeaderBackButton onClick={goBack} />} />
      <AuthForm mode={'login'} />
    </FullHeightPage>
  );
};

export default Login;
