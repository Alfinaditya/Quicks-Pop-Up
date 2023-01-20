import { useState } from "react";
import styled from "styled-components";
import BaseStyles from "./BaseStyles";
import NormalizeStyles from "./NormalizeStyles";
import Header from "./partials/Header";
import AllRoutes from "./routes";

const PopUpContainer = styled.div`
  /* background: yellow;
  bottom: 0;
  right: 0;
  position: absolute;
  height: 50vh;
  width: 30vh;
  margin-bottom: 27px;
  margin-right: 34px; */
  /* background: green; */
`;
const AppContainer = styled.div`
  /* background: green;
  position: relative;
  height: 100vh; */
  display: flex;
`;
const Left = styled.div`
  width: 20%;
  border: 1px solid white;
  height: 100vh;
`;
const Right = styled.div`
  width: 80%;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <Left />
      <NormalizeStyles />
      <BaseStyles />
      <Right>
        <Header />
        <AllRoutes />
      </Right>
    </AppContainer>
  );
}

export default App;
