import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import inboxesFromServer from "../inbox.json";
import {
  Body,
  ChatBubble,
  Footer,
  Head,
  InboxDetailBox,
  SendMessageInput,
  Options,
  OptionsBubble,
  Right,
  Left,
} from "./style";
import { USER_ID } from "../../../helpers/const";
import { Button } from "../../../sharedStyles";

const InboxDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showWaitingToConnectAlert, setShowWaitingToConnectAlert] =
    useState(false);
  const [showOptionsBubbleById, setShowOptionsBubbleById] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [inbox, setInbox] = useState(
    inboxesFromServer.find((inbox) => {
      return inbox.id === id;
    })
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (inbox.isStaff) {
      setShowWaitingToConnectAlert(true);
    }
    const myReply = {
      id: crypto.randomUUID(),
      userId: USER_ID,
      name: "You",
      message: replyMessage.message,
      createdAt: "19:32",
    };
    const newMessage = {
      id: crypto.randomUUID(),
      userId: USER_ID,
      name: "You",
      message,
      createdAt: "19:32",
    };
    const params = replyMessage ? [myReply, newMessage] : [newMessage];
    setInbox({ ...inbox, chats: [...inbox.chats, ...params] });
    setReplyMessage("");
  }
  function handleReplyMessage(id) {
    setShowOptionsBubbleById("");
    const x = inbox.chats.map((chat) => chat.id === id);
    setReplyMessage(x);
  }
  function handleDeleteMessage(id) {
    setShowOptionsBubbleById("");
    // console.log(id);
    // console.log(inbox.chats);
    const x = inbox.chats.filter((chat) => chat.id !== id);
    setInbox({ ...inbox, chats: x });
  }

  return (
    <InboxDetailBox>
      <Head>
        <h2>{inbox.title}</h2>
        <p onClick={() => navigate("/")}>X</p>
        {!inbox.isStaff && <p>{inbox.participants} Participants</p>}
      </Head>
      <hr />
      <Body>
        {inbox.chats.map((chat, i) => (
          <div key={chat.id}>
            {chat.userId === USER_ID ? (
              <ChatBubble
                style={{
                  marginLeft: "auto",
                }}
              >
                <Options
                  onClick={() =>
                    setShowOptionsBubbleById((showOptionsBubbleById) =>
                      showOptionsBubbleById === chat.id ? "" : chat.id
                    )
                  }
                >
                  ...
                </Options>
                {showOptionsBubbleById && showOptionsBubbleById === chat.id && (
                  <OptionsBubble type="me">
                    <p>Edit</p>
                    <p onClick={() => handleDeleteMessage(chat.id)}>Delete</p>
                  </OptionsBubble>
                )}
                <Right>
                  {i > 0 ? (
                    <>
                      {chat.userId !== inbox.chats[i - 1].userId && (
                        <p>{chat.name}</p>
                      )}
                    </>
                  ) : (
                    <p>{chat.name}</p>
                  )}
                  <p>{chat.message}</p>
                  <p>{chat.createdAt}</p>
                </Right>
              </ChatBubble>
            ) : (
              <ChatBubble>
                {showOptionsBubbleById && showOptionsBubbleById === chat.id && (
                  <OptionsBubble type="you">
                    <p>Share</p>
                    <p onClick={() => handleReplyMessage(chat.id)}>Reply</p>
                  </OptionsBubble>
                )}
                <Left>
                  <p>{chat.name}</p>
                  <p>{chat.message}</p>
                  <p>{chat.createdAt}</p>
                </Left>
                <Options
                  onClick={() =>
                    setShowOptionsBubbleById((showOptionsBubbleById) =>
                      showOptionsBubbleById === chat.id ? "" : chat.id
                    )
                  }
                >
                  ...
                </Options>
                {/* {showOptionsBubble && (
                  <OptionsBubble>
                    <p>Edit</p>
                    <p>Delete</p>
                  </OptionsBubble>
                )} */}
              </ChatBubble>
            )}
            {!chat.isStaff && (
              <>
                {i === 3 && <p>New Message</p>}
                {i === 0 && <p>Today June 09,2021</p>}
              </>
            )}
          </div>
        ))}
      </Body>
      {/* <div
        style={{
          backgroundColor: "brown",
          height: "70%",
          position: "relative",
        }}
      > */}
      {/* <div style={{ position: "relative" }}> */}
      <Footer>
        {showWaitingToConnectAlert && (
          <div
            style={{
              padding: "10px",
              marginBottom: "10px",
              background: "blue",
            }}
          >
            Please wait while we connect you with one of our team ...
          </div>
          // <div style={{ marginBottom: "12px" }}>
          //   Please wait while we connect you with one of our team ...
          // </div>
        )}
        {replyMessage && (
          <div>
            <strong>Replying to {replyMessage.name}</strong>
            <p>{replyMessage.message}</p>
            <div onClick={() => setReplyMessage("")}>x</div>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <SendMessageInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
          <Button type="submit" disabled={!message}>
            Send
          </Button>
        </form>
      </Footer>
      {/* </div> */}
      {/* </div> */}
    </InboxDetailBox>
  );
};

export default InboxDetail;
