import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SubContainer } from "./styles";

const FloatingActionButtons = () => {
  const [showMenus, setShowMenus] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <SubContainer>
        {showMenus && (
          <>
            <button onClick={() => navigate("inbox")}>Inbox</button>
            <button>Task</button>
          </>
        )}
        <button onClick={() => setShowMenus(!showMenus)}>Petir</button>
      </SubContainer>
    </Container>
  );
};

export default FloatingActionButtons;
