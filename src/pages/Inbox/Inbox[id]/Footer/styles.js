import styled from "styled-components";
import { Input } from "../../../../sharedStyles";

export const Footer = styled.div`
  position: absolute;
  bottom: 19px;
  width: 100%;
`;

export const WaitingToConnectAlert = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  background: #e9f3ff;
  padding-left: 14.41px;
`;

export const SendMessageForm = styled.form`
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
`;

export const BottomLeftContainer = styled.div`
  width: 80%;
`;

export const ReplyingMessageContainer = styled.div`
  background: #f2f2f2;
  padding-left: 17.08px;
  padding-right: 17.08px;
  padding-top: 15px;
  padding-bottom: 12.44px;
  border: 1px solid #828282;
`;

export const ReplyingMessageHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReplyingTitle = styled.strong`
  display: block;
  margin-bottom: 7.16px;
`;

export const SendMessageInput = styled(Input)`
  /* z-index: 999; */
  padding-left: 16px;
  padding-top: 12.81px;
  padding-bottom: 12.81px;
  width: 100%;
`;

export const ReplyingMessage = styled.p``;
