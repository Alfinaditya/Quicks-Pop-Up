import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BubbleChatIcon, ReadModeIcon, ThunderIcon } from "../../icons";
import {
  Container,
  InboxButtton,
  ShowMenusButton,
  Menu,
  TaskButton,
  MenuTitle,
  MenuContainer,
} from "./styles";

const FloatingActionButtons = () => {
  const [showMenus, setShowMenus] = useState(false);
  const navigate = useNavigate();
  return (
    <Menu>
      <Container>
        {showMenus && (
          <>
            <MenuContainer>
              <MenuTitle>Inbox</MenuTitle>
              <InboxButtton onClick={() => navigate("inbox")}>
                <BubbleChatIcon />
              </InboxButtton>
            </MenuContainer>
            <MenuContainer>
              <MenuTitle>Task</MenuTitle>
              <TaskButton onClick={() => navigate("task")}>
                <ReadModeIcon />
              </TaskButton>
            </MenuContainer>
          </>
        )}
        <MenuContainer>
          <MenuTitle>&nbsp;</MenuTitle>
          <ShowMenusButton onClick={() => setShowMenus(!showMenus)}>
            <ThunderIcon />
          </ShowMenusButton>
        </MenuContainer>
      </Container>
    </Menu>
  );
};

export default FloatingActionButtons;
