import React from 'react';
import styled from '@emotion/styled';
import LabelInput from '~/components/LabelInput';

interface Props {
  mode: 'login' | 'register';
}

const Block = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AuthForm = ({ mode }: Props) => {
  return (
    <Block>
      <InputGroup>
        <LabelInput label={'아이디'} />
        <LabelInput label={'비밀번호'} />
      </InputGroup>
    </Block>
  );
};

export default AuthForm;
