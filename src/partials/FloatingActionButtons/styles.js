import styled from "styled-components";

const MenuButton = styled.div`
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 34px;
  margin-bottom: 27px;
`;

export const ShowMenusButton = styled(MenuButton)`
  background: #2f80ed;
`;

export const InboxButtton = styled(MenuButton)`
  background: #8785ff;
`;

export const TaskButton = styled(MenuButton)`
  background: #f8b76b;
`;

export const MenuContainer = styled.div`
  margin-left: 26px;
`;

export const MenuTitle = styled.p`
  text-align: center;
  color: #f2f2f2;
  /* color: #f2f2f2; */
  /* color: #f2f2f2; */
  margin-bottom: 11.88px;
`;
