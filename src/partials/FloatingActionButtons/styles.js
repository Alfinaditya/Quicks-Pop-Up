import styled from "styled-components";
import { motion } from "framer-motion";

const MenuButton = styled(motion.div)`
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  /* align-items: center;   */
  /* background-color: red; */
  /* padding: 10px; */
  /* padding: 100px; */
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 34px;
  margin-bottom: 27px;
  /* background-color: yellow; */
`;

export const ShowMenusButton = styled(MenuButton)`
  background: #2f80ed;
`;

export const InboxButtton = styled(MenuButton)`
  background: ${(props) => (props.isActive ? "#8785ff" : "#f2f2f2")};
`;

export const TaskButton = styled(MenuButton)`
  background: ${(props) => (props.isActive ? "#f8b76b" : "#f2f2f2")};
`;

export const MenuContainer = styled(motion.div)`
  /* margin-left: 26px; */
  cursor: pointer;
  /* position: absolute; */
  /* right: 0; */
`;

export const MenuTitle = styled.p`
  text-align: center;
  color: #f2f2f2;
  /* color: #f2f2f2; */
  /* color: #f2f2f2; */
  margin-bottom: 11.88px;
`;
