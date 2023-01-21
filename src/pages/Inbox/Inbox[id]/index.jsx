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
} from "./style";
import { USER_ID } from "../../../helpers/const";
import { Button } from "../../../sharedStyles";

const InboxDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showWaitingToConnectAlert, setShowWaitingToConnectAlert] =
    useState(false);
  const [inbox, setInbox] = useState(
    inboxesFromServer.find((inbox) => {
      return inbox.id === id;
    })
  );

  function handleSubmit(e) {
    if (inbox.isStaff) {
      setShowWaitingToConnectAlert(true);
    }
    e.preventDefault();
    const params = {
      id: crypto.randomUUID(),
      userId: USER_ID,
      name: "You",
      message,
      createdAt: "19:32",
    };
    setInbox({ ...inbox, chats: [...inbox.chats, params] });
  }
  return (
    <InboxDetailBox>
      <Head>
        <h2>{inbox.title}</h2>
        <p onClick={() => navigate("/")}>X</p>
      </Head>
      <hr />
      <Body>
        {inbox.chats.map((chat, i) => (
          <div key={chat.id}>
            {chat.userId === USER_ID ? (
              <ChatBubble
                style={{
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div>...</div>
                <div>
                  <h2>{chat.name}</h2>
                  <p>{chat.message}</p>
                </div>
              </ChatBubble>
            ) : (
              <ChatBubble>
                <h2>{chat.name}</h2>
                <p>{chat.message}</p>
                <div>...</div>
              </ChatBubble>
            )}
            {chat.isStaff === false && (
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
      <div style={{ position: "relative" }}>
        <Footer>
          {showWaitingToConnectAlert && (
            <div style={{ marginBottom: "12px" }}>
              Please wait while we connect you with one of our team ...
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
      </div>
      {/* </div> */}
    </InboxDetailBox>
  );
};

export default InboxDetail;
