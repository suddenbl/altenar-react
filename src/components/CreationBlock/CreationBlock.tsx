import { FC } from 'react';
import styled from 'styled-components';
import { BlockDescription, BlockTitle } from './CreationBlockStyles';

const Container = styled.div`
  width: 94%;
  margin-bottom: 35px;
`;

export const CreationBlock: FC<CreationBlockInterface> = ({ title, description, children }) => {
  return (
    <Container>
      <div>
        <BlockTitle>{title}</BlockTitle>
        <BlockDescription>{description}</BlockDescription>
      </div>
      {children}
    </Container>
  );
};
