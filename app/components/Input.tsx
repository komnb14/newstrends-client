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
  &:focus {
    border: 1px solid ${colors.primary};
  }
  &::placeholder {
    color: ${colors.gray2};
  }
`;

export interface Props extends React.HTMLAttributes<HTMLInputElement> {}
const Input = (props: Props) => {
  return <StyledInput {...props} />;
};

export default Input;
