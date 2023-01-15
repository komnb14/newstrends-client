import React from 'react';
import { ArrowLeft } from '~/components/vector';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

interface Props {
  onClick?: () => void;
}

const IconButton = styled.button`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: -8px;
`;

const HeaderBackButton = ({ onClick }: Props) => {
  return (
    <IconButton onClick={onClick}>
      <ArrowLeft />
    </IconButton>
  );
};

export default HeaderBackButton;
