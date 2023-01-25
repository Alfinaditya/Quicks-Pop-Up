import React, { useState } from "react";
import Button from "../../../../components/Button";
import { USER_ID } from "../../../../helpers/const";
import { CloseIcon } from "../../../../icons";
// import { ReplyingMessage } from "../style";
import {
  BottomLeftContainer,
  Footer,
  ReplyingMessage,
  ReplyingMessageContainer,
  ReplyingMessageHead,
  ReplyingTitle,
  SendMessageForm,
  SendMessageInput,
  WaitingToConnectAlert,
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
      {showWaitingToConnectAlert && (
        <WaitingToConnectAlert>
          <div style={{ marginRight: 10 }}>X</div>
          <strong>
            Please wait while we connect you with one of our team ...
          </strong>
        </WaitingToConnectAlert>
      )}
      <SendMessageForm onSubmit={(e) => handleSubmit(e)}>
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
        {/* <Button type="submit" disabled={!message}>
        Send
      </Button> */}
      </SendMessageForm>
    </Footer>
  );
};

export default InboxFooter;
