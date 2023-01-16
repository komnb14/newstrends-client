import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { colors } from '~/lib/colors';
import { css } from '@emotion/react';

interface ButtonProps {
  layoutMode?: 'inline' | 'fullWidth';
}
interface Props extends HTMLAttributes<HTMLButtonElement>, ButtonProps {}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background-color: ${colors.primary};
  border: none;
  color: white;
  height: 48px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: 600;
  ${(props) =>
    props.layoutMode === 'fullWidth' &&
    css`
      width: 100%;
    `}
`;

const Button = ({ layoutMode = 'inline', ...rest }: Props) => {
  return <StyledButton layoutMode={layoutMode} {...rest} />;
};

export default Button;
