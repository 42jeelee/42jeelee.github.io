import { ReactNode } from "react";
import styled from "styled-components";

interface BoxProps {
  children?: ReactNode;
}

const Container = styled.div`
  width: 100vw;
  padding: 20px;
  font-size: 18px;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.point};
`;

function Box({ children }: BoxProps) {
  return (
    <Container>{ children }</Container>
  );
}

export default Box;