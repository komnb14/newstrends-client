import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactNode;
}

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FullHeightPage = ({ children }: Props) => {
  return (
    <>
      <Page>{children}</Page>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }
        `}
      />
    </>
  );
};

export default FullHeightPage;
