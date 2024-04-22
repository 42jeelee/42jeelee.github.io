import styled, { ThemeProvider } from "styled-components";
import Box from "./components/Box";
import { lightTheme, darkTheme } from "./themes";
import { useState } from "react";
import ThemeBtn from "./components/ThemeBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [dark, setDark] = useState(false);

  const onClickTheme = () => {
    setDark(prev => !prev);
  }
  return (
    <ThemeProvider theme={dark? darkTheme:lightTheme}>
      <Container>
        <Box>Hello World!</Box>
        <ThemeBtn onClick={onClickTheme} dark={dark} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
