import styled, { css } from "styled-components";
import { Box, Input } from "../../../sharedStyles";

export const InboxDetailBox = styled(Box)``;

export const Head = styled.div`
  position: sticky;
  top: 0;
  background: pink;
`;

export const Body = styled.div`
  background: red;
  height: 80%;
  padding-bottom: 20px;
  /* height: 88%; */
  overflow-y: scroll;
  /* height: 400%; */
`;

export const Footer = styled.div`
  background: green;
  /* margin-bottom: 19px; */
  position: absolute;
  bottom: 19px;
  width: 100%;
  /* position: sticky; */
  /* bottom: 10%;
  right: 0; */
  /* bottom: 19px; */
  /* width: 100%; */
  /* position: fixed;
  bottom: 12%;
  background: green;
  width: 30vw;
  padding-left: 19px; */
  /* display: flex; */
  /* justify-content: center; */
`;

export const SendMessageInput = styled(Input)`
  width: 85%;
`;

export const ChatBubble = styled.div`
  /* text-align: right;
  display: flex;
  justify-content: flex-end; */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: tomato;
  width: 60%;
  display: flex;
  position: relative;
  /* width: min-content; */
`;

export const Right = styled.div`
  text-align: right;
  background: blue;
  flex: 1;
`;
export const Left = styled.div`
  background: tomato;
  flex: 1;
`;

export const Options = styled.div`
  background: yellow;
  margin-top: 30px;
  cursor: pointer;
  /* margin: auto; */
`;

export const OptionsBubble = styled.div`
  background: brown;
  position: absolute;
  bottom: 0px;
  /* top: 10px; */
  ${(props) =>
    props.type === "me" &&
    css`
      left: 0;
    `};
  ${(props) =>
    props.type === "you" &&
    css`
      right: 0;
    `};
`;
