import styled, { css } from "styled-components";

const Options = styled.div`
  display: flex;
  align-items: center;
`;

const OptionsText = styled.p`
  color: #2f80ed;
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

export const SenderName = styled.p`
  color: ${(props) => props.color};
  ${(props) =>
    props.type === "me" &&
    css`
      text-align: right;
    `};
  margin-bottom: 5px;
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
  ${(props) =>
    props.type === "me"
      ? css`
          margin-left: 7.67px;
        `
      : css`
          margin-right: 7.67px;
        `};
  /* position: relative; */
  /* width: min-content; */
`;

export const Message = styled.div`
  flex: 1;
  word-break: break-all;
`;

export const Time = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;

export const OptionsBubble = styled.div`
  background: white;
  position: absolute;
  cursor: pointer;
  border: 1px solid #bdbdbd;
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

export const Share = styled(Options)`
  height: 37.68px;
  border-bottom: 1px solid #bdbdbd;
  padding-left: 12.46px;
`;

export const ShareText = styled(OptionsText)``;

export const Reply = styled(Options)`
  height: 41.32px;
  padding-left: 13.55px;
`;

export const ReplyText = styled(OptionsText)``;
