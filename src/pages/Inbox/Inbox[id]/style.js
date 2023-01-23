import styled, { css } from "styled-components";
import { Box, Input } from "../../../sharedStyles";

export const InboxDetailBox = styled(Box)``;

export const DateDivider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  &:after,
  &:before {
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
  }
  &:not(:empty):before {
    margin-right: 0.25em;
  }
  &:not(:empty):after {
    margin-left: 0.25em;
  }
`;
export const Head = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: 73.5px;
  /* padding-bottom: 10px; */
`;

export const Body = styled.div`
  height: 80%;
  padding-bottom: 20px;
  padding-left: 28px;
  padding-right: 18px;
  /* height: 88%; */
  overflow-y: scroll;
  /* height: 400%; */
`;

export const Footer = styled.div`
  /* background: green; */
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
  /* z-index: 999; */
  margin-right: 13px;
  width: 80%;
`;

export const ChatBubble = styled.div`
  /* text-align: right;
  display: flex;
  justify-content: flex-end; */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  position: relative;
  /* position: relative; */
  /* width: min-content; */
`;

export const Right = styled.div`
  text-align: left;
  flex: 1;
  word-break: break-all;
`;
export const Left = styled.div`
  flex: 1;
  word-break: break-all;
`;

export const Options = styled.div`
  /* margin-top: 30px; */
  cursor: pointer;
  /* margin: auto; */
`;

export const OptionsBubble = styled.div`
  background: white;
  position: absolute;
  /* bottom: 0px; */
  z-index: 1;
  width: 126px;
  text-align: left;
  border-radius: 10px;
  /* top: 10px; */
  ${(props) =>
    props.type === "me" &&
    css`
      left: 0px;
    `};
  ${(props) =>
    props.type === "you" &&
    css`
      right: 0px;
    `};
`;
