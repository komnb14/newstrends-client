import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@remix-run/react';
import { colors } from '~/lib/colors';

interface Props {
  question: string;
  name: string;
  to: string;
  className?: string;
}

const Block = styled.div`
  color: ${colors.gray3};
  a {
    color: ${colors.gray5};
    font-weight: 600;
  }
`;

const QuestionLink = ({ question, name, to, className }: Props) => {
  return (
    <Block className={className}>
      {question} <Link to={to}>{name}</Link>
    </Block>
  );
};

export default QuestionLink;
