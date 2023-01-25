import styled from "styled-components";
import BaseStyles from "./BaseStyles";
import Header from "./partials/Header";
import AllRoutes from "./routes";
import "./fonts/lato.css";

const AppContainer = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 20%;
  border-right: 1px solid #f2f2f2;
  height: 100vh;
`;
const Right = styled.div`
  width: 80%;
`;

function App() {
  return (
    <AppContainer>
      <Left />
      <BaseStyles />
      <Right>
        <Header />
        <AllRoutes />
      </Right>
    </AppContainer>
  );
}

export default App;
