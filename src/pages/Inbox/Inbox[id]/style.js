import styled from "styled-components";
import { Box, Input } from "../../../sharedStyles";

export const InboxDetailBox = styled(Box)``;

export const Head = styled.div`
  position: sticky;
  top: 0;
  background: pink;
`;

export const Body = styled.div`
  background: red;
  padding-bottom: 50px;
  /* width: 100vh; */
  /* height: 400%; */
`;

export const Footer = styled.div`
  /* position: sticky; */
  /* bottom: 10%;
  right: 0; */
  /* bottom: 19px; */
  /* width: 100%; */
  position: fixed;
  bottom: 12%;
  background: green;
  width: 30vw;
  padding-left: 19px;
  /* display: flex; */
  /* justify-content: center; */
`;

export const SendMessageInput = styled(Input)`
  width: 85%;
`;

export const ChatBubble = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
