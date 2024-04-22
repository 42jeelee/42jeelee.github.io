import styled from "styled-components"

interface ContainerProps {
  dark: boolean;
}

interface ThemeBtnProps extends ContainerProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const CircleBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: .3s ease-in-out;
`;

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 65px;
  height: 30px;
  border: 1px solid;
  border-radius: 30px;
  padding: 1px;
  ${props => props.dark && `
    ${CircleBtn} {
      transform: translateX(34px);
    }
  `}
`;

function ThemeBtn({ dark, onClick }: ThemeBtnProps) {
  return (
    <Container dark={dark}>
      <CircleBtn onClick={onClick}></CircleBtn>
    </Container>
  );
}

export default ThemeBtn;