import React from 'react';
import styled from '@emotion/styled';
import Header from '~/components/Header';
import HeaderBackButton from '~/components/HeaderBackButton';
import { useGoBack } from '~/hooks/useGoBack';

const Page = styled.div`
  height: 100%;
`;

const Register = () => {
  const goBack = useGoBack();
  return (
    <Page>
      <Header title={'회원가입'} headerLeft={<HeaderBackButton onClick={goBack} />} />
    </Page>
  );
};

export default Register;
