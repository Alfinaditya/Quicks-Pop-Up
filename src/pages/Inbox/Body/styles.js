import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* justify-content: space-around; */
  margin-bottom: 22px;
  padding-bottom: 36px;
  ${(props) =>
    !props.isLast &&
    css`
      border-bottom: 1px solid #828282;
    `};
  cursor: pointer;
`;

export const GroupChatIconContainer = styled.div`
  width: 51px;
  height: 34px;
`;

export const Chat = styled.div`
  margin-left: 12px;
  /* flex: 1; */
`;

export const ChatHead = styled.div`
  display: flex;
  align-items: center;
  /* width: 414.73px; */
  margin-bottom: 9.76px;
`;

export const Title = styled.h1`
  font-size: 15px;
  margin-right: 16px;
  color: #2f80ed;
`;

export const LatestMessageAt = styled.p`
  font-size: 12px;
`;

export const SenderName = styled.h2`
  font-weight: bold;
  font-size: 14px;
`;

export const LatestMessage = styled.p`
  font-size: 13px;
`;

export const CircleNotificationContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 10px;
`;

export const CircleNotification = styled.div`
  width: 10px;
  height: 10px;
  background: #eb5757;
  border-radius: 50%;
  text-align: right;
`;
