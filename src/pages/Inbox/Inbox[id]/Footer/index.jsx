import React, { useState } from "react";
import Button from "../../../../components/Button";
import { USER_ID } from "../../../../helpers/const";
import { CloseIcon, LoadingAnimateIcon } from "../../../../icons";
import {
  BottomLeftContainer,
  Container,
  Footer,
  LoadingAnimateIconContainer,
  ReplyingMessage,
  ReplyingMessageContainer,
  ReplyingMessageHead,
  ReplyingTitle,
  SendMessageForm,
  SendMessageInput,
  WaitingToConnectAlert,
  WaitingToConnectAlertText,
} from "./styles";

const InboxFooter = ({ inbox, setInbox, replyMessage, setReplyMessage }) => {
  const [showWaitingToConnectAlert, setShowWaitingToConnectAlert] =
    useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (inbox.isStaff) {
      setShowWaitingToConnectAlert(true);
    }
    const myReply = {
      id: crypto.randomUUID(),
      userId: USER_ID,
      name: "You",
      nameColor: "#9B51E0",
      bubbleChatColor: "#EEDCFF",
      message: replyMessage.message,
      createdAt: "19:32",
    };
    const newMessage = {
      id: crypto.randomUUID(),
      userId: USER_ID,
      name: "You",
      nameColor: "#9B51E0",
      bubbleChatColor: "#EEDCFF",
      message,
      createdAt: "19:32",
    };
    const params = replyMessage ? [myReply, newMessage] : [newMessage];
    setInbox({ ...inbox, chats: [...inbox.chats, ...params] });
    setReplyMessage("");
    setMessage("");
  }

  return (
    <Footer>
      <Container>
        {showWaitingToConnectAlert && (
          <WaitingToConnectAlert>
            <LoadingAnimateIconContainer>
              <LoadingAnimateIcon
                circularColor="#2F80ED"
                style={{ width: 34.41, height: 34.41 }}
              />
            </LoadingAnimateIconContainer>
            <WaitingToConnectAlertText>
              Please wait while we connect you with one of our team ...
            </WaitingToConnectAlertText>
          </WaitingToConnectAlert>
        )}
        <SendMessageForm onSubmit={(e) => handleSubmit(e)}>
          {/* <div style={{ background: "green" }}> */}
          <BottomLeftContainer>
            {replyMessage && (
              <ReplyingMessageContainer>
                <ReplyingMessageHead>
                  <ReplyingTitle>Replying to {replyMessage.name}</ReplyingTitle>
                  <CloseIcon
                    onClick={() => setReplyMessage("")}
                    style={{ cursor: "pointer" }}
                  />
                </ReplyingMessageHead>
                <ReplyingMessage>{replyMessage.message}</ReplyingMessage>
              </ReplyingMessageContainer>
            )}
            <SendMessageInput
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Type a new message"
            />
          </BottomLeftContainer>
          <Button
            type="submit"
            style={{ alignSelf: "end", marginLeft: "13px" }}
            disabled={!message}
          >
            Send
          </Button>
          {/* </div> */}
        </SendMessageForm>
      </Container>
    </Footer>
  );
};

export default InboxFooter;
