import styled, { css } from "styled-components";
import { Box, Input } from "../../../sharedStyles";

export const InboxDetailBox = styled(Box)``;

const Options = styled.div`
  display: flex;
  align-items: center;
`;
const OptionsText = styled.p`
  color: #2f80ed;
`;

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

export const ChatBubbleContainer = styled.div`
  width: 60%;
  display: flex;
  ${(props) =>
    props.type === "me" &&
    css`
      margin-left: auto;
    `};
`;

export const HeadText = styled.div`
  flex: 1;
  margin-left: 18.43px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h3`
  color: #2f80ed;
`;

export const Participants = styled.p`
  color: #333333;
  font-weight: 300;
`;

export const Time = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;

export const SenderName = styled.p`
  color: ${(props) => props.color};
  ${(props) =>
    props.type === "me" &&
    css`
      text-align: right;
    `};
  margin-bottom: 5px;
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
  padding-left: 16px;
  padding-top: 12.81px;
  padding-bottom: 12.81px;
  width: 100%;
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

export const Message = styled.div`
  flex: 1;
  word-break: break-all;
`;

export const Edit = styled(Options)`
  height: 37.68px;
  border-bottom: 1px solid #bdbdbd;
  padding-left: 18.39px;
`;

export const EditText = styled(OptionsText)``;

export const Delete = styled(Options)`
  padding-left: 18.39px;
  height: 41.32px;
`;

export const DeleteText = styled(OptionsText)`
  color: #eb5757;
`;

export const Share = styled(Options)`
  height: 37.68;
  border-bottom: 1px solid #bdbdbd;
  padding-left: 12.46;
`;

export const ShareText = styled(OptionsText)``;

export const Reply = styled(Options)`
  height: 41.32;
  padding-left: 13.55;
`;

export const ReplyText = styled(OptionsText)``;

export const OptionsBubble = styled.div`
  background: white;
  position: absolute;
  /* bottom: 0px; */
  z-index: 1;
  width: 126px;
  text-align: left;
  border-radius: 10px;
  /* top: 10px; */
  /* background: green; */
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

export const NewMessageAlert = styled.div`
  background: #e9f3ff;
  width: 141.83px;
  height: 33.89px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 5px;
  margin-top: 8.43px;
  margin-bottom: 8.43px;
`;

export const NewMessageText = styled.strong`
  color: #2f80ed;
`;

export const ReplyingTitle = styled.strong`
  display: block;
  margin-bottom: 7.16px;
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

export const BottomLeftContainer = styled.div`
  width: 80%;
`;

export const SendMessageForm = styled.form`
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
`;

export const ReplyingMessage = styled.p``;
