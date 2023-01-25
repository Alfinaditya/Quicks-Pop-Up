import React, { useEffect } from "react";
import { useState } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
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

const variants = {
  open: { opacity: 1, marginRight: 28 },
  closed: { marginRight: 0, opacity: 0, pointerEvents: "none" },
};

const FloatingActionButtons = () => {
  const { pathname } = useLocation();
  const [showMenus, setShowMenus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShowMenus(pathname !== "/");
  }, []);

  return (
    <Menu>
      <Container>
        <>
          <MenuContainer
            animate={showMenus ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <MenuTitle>Inbox</MenuTitle>
            <InboxButtton
              isActive={pathname.includes("inbox")}
              onClick={() => navigate("inbox")}
            >
              <BubbleChatIcon
                fill={pathname.includes("inbox") ? "#f2f2f2" : "#8785ff"}
              />
            </InboxButtton>
          </MenuContainer>
          <MenuContainer
            animate={showMenus ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            variants={variants}
          >
            <MenuTitle>Task</MenuTitle>
            <TaskButton
              isActive={pathname === "/task"}
              onClick={() => navigate("task")}
            >
              <ReadModeIcon
                fill={pathname === "/task" ? "#f2f2f2" : "#F8B76B"}
              />
            </TaskButton>
          </MenuContainer>
        </>
        <MenuContainer>
          <MenuTitle>&nbsp;</MenuTitle>
          <ShowMenusButton
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenus(!showMenus)}
          >
            <ThunderIcon />
          </ShowMenusButton>
        </MenuContainer>
      </Container>
    </Menu>
  );
};

export default FloatingActionButtons;
