import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Input, { type Props as InputProps } from '~/components/Input';
import { colors } from '~/lib/colors';
import { css } from '@emotion/react';

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ focused: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.gray4};
  font-weight: 600;
  margin-bottom: 8px;
  ${(props) =>
    props.focused &&
    css`
      color: ${colors.primary};
    `};
`;

interface Props extends InputProps {
  label: string;
}

const LabelInput = ({ label, ...rest }: Props) => {
  const [focused, setFocused] = useState(false);
  const onFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);
  return (
    <Block>
      <Label focused={focused}>{label}</Label>
      <Input {...rest} onFocus={onFocus} onBlur={onBlur} />
    </Block>
  );
};

export default LabelInput;
