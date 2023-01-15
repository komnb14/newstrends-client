import React from 'react';
import styled from '@emotion/styled';
import { colors } from '~/lib/colors';
import { Logo } from '~/components/vector';

interface Props {
  title?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}

const HeaderBlock = styled.header`
  position: relative;
  height: 56px;
  border-bottom: 1px solid ${colors.gray0};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${colors.gray5};
  font-size: 18px;
  font-weight: 600;

  svg {
    width: 84px;
    height: 17px;
    color: ${colors.gray5};
  }
`;

const HeaderSide = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  display: flex;
  top: 0;
  ${(props) => props.position}: 16px;
  align-items: center;
  height: 100%;
`;

const Header = ({ title = <Logo />, headerLeft, headerRight }: Props) => {
  return (
    <HeaderBlock>
      {headerLeft && <HeaderSide position={'left'}>{headerLeft}</HeaderSide>}
      <Title>{title}</Title>
      {headerRight && <HeaderSide position={'right'}>{headerRight}</HeaderSide>}
    </HeaderBlock>
  );
};

export default Header;
