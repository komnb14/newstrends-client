import React from 'react';
import styled from '@emotion/styled';
import { colors } from '~/lib/colors';
import { Logo } from '~/components/vector';

const HeaderBlock = styled.header`
  height: 56px;
  border-bottom: 1px solid ${colors.gray0};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 84px;
    height: 17px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Logo />
    </HeaderBlock>
  );
};

export default Header;
