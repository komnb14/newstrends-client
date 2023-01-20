import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import LabelInput from '~/components/LabelInput';
import Button from '~/components/Button';
import QuestionLink from '~/components/QuestionLink';
import { Form } from '@remix-run/react';
import useFormLoading from '~/hooks/useFormLoading';
import { AppError } from '~/lib/error';

interface Props {
  mode: 'login' | 'register';
  error?: AppError;
}

const Block = styled(Form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const authDescriptions = {
  login: {
    usernamePlaceHolder: '아이디를 입력하세요.',
    passwordPlaceHolder: '비밀번호를 입력하세요.',
    buttonText: '로그인',
    questionName: '회원가입',
    question: '계정이 없으신가요?',
    actionLink: '/register',
  },
  register: {
    usernamePlaceHolder: '5~20자 사이의 영문 소문자 숫자 입력',
    passwordPlaceHolder: '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력',
    buttonText: '회원가입',
    questionName: '로그인',
    question: '계정이 이미 있으신가요?',
    actionLink: '/login',
  },
};

const AuthForm = ({ mode, error }: Props) => {
  const {
    usernamePlaceHolder,
    passwordPlaceHolder,
    questionName,
    question,
    buttonText,
    actionLink,
  } = authDescriptions[mode];
  const isLoading = useFormLoading();

  const useNameErrorMessage = useMemo(() => {
    if (error?.name === 'UserExistsError') {
      return '이미 존재하는 유저입니다.';
    }
    return undefined;
  }, [error]);

  return (
    <Block method={'post'}>
      <InputGroup>
        <LabelInput
          label={'아이디'}
          name={'username'}
          placeholder={usernamePlaceHolder}
          disabled={isLoading}
          errorMessage={useNameErrorMessage}
        />
        <LabelInput
          label={'비밀번호'}
          name={'password'}
          placeholder={passwordPlaceHolder}
          disabled={isLoading}
        />
      </InputGroup>
      <ActionsBox>
        <Button type={'submit'} layoutMode={'fullWidth'} disabled={isLoading}>
          {buttonText}
        </Button>
        <QuestionLink question={question} name={questionName} to={actionLink} />
      </ActionsBox>
    </Block>
  );
};

export default AuthForm;
