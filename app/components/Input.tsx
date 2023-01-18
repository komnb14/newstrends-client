import React from 'react';
import styled from '@emotion/styled';
import { colors } from '~/lib/colors';

const StyledInput = styled.input`
  height: 48px;
  border: 1px solid ${colors.gray2};
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  padding: 0 16px;
  color: ${colors.gray5};
  transition: all 0.25s ease-in-out;
  &:focus {
    border: 1px solid ${colors.primary};
  }
  &::placeholder {
    color: ${colors.gray2};
  }
  &:disabled {
    background: ${colors.gray2};
    color: ${colors.gray3};
  }
`;

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: Props) => {
  return <StyledInput {...props} />;
};

export default Input;
