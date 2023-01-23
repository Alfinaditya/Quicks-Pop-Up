import React, { Fragment, useState } from "react";
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
  DateDivider,
} from "./style";
import { USER_ID } from "../../../helpers/const";
import Button from "../../../components/Button";
import ArrowBackIcon from "../../../icons/arrow_back_icon.svg";
import CloseIcon from "../../../icons/close_icon.svg";
import ArrowDownWardIcon from "../../../icons/arrow_downward_icon.svg";

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
  function handleReplyMessage(id) {
    setShowOptionsBubbleById("");
    const x = inbox.chats.find((chat) => chat.id === id);
    setReplyMessage(x);
  }
  function handleDeleteMessage(id) {
    setShowOptionsBubbleById("");
    const x = inbox.chats.filter((chat) => chat.id !== id);
    setInbox({ ...inbox, chats: x });
  }

  return (
    <InboxDetailBox>
      <Head>
        <img
          style={{ marginLeft: "29px", cursor: "pointer" }}
          onClick={() => navigate("/inbox")}
          src={ArrowBackIcon}
          alt=""
          // style={{ cursor: "pointer" }}
        />
        <div
          style={{
            flex: 1,
            marginLeft: 18.43,
            display: "flex",
            flexDirection: "column ",
            alignItems: "start",
          }}
        >
          <h3 style={{ color: "#2F80ED" }}>{inbox.title}</h3>
          <p
            style={{
              fontSize: 12,
              color: "#333333",
            }}
          >
            {!inbox.isStaff && inbox.participants} Participants
          </p>
        </div>
        <img
          style={{ marginRight: 21, cursor: "pointer" }}
          src={CloseIcon}
          onClick={() => navigate("/")}
        />
      </Head>
      <hr />
      <Body>
        {inbox.chats.map((chat, i) => (
          <Fragment key={chat.id}>
            {chat.userId === USER_ID ? (
              <div
                style={{
                  width: "60%",
                  marginLeft: "auto",
                  // position: "relative",
                  textAlign: "right",
                }}
              >
                {i > 0 ? (
                  <>
                    {chat.userId !== inbox.chats[i - 1].userId && (
                      <p style={{ color: chat.nameColor, marginBottom: "5px" }}>
                        {chat.name}
                      </p>
                    )}
                  </>
                ) : (
                  <p style={{ color: chat.nameColor, marginBottom: "5px" }}>
                    {chat.name}
                  </p>
                )}
                <div
                  style={{
                    display: "flex",
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

                  <ChatBubble
                    style={{
                      background: chat.bubbleChatColor,
                    }}
                  >
                    <Right>
                      <p>{chat.message}</p>
                      <p>{chat.createdAt}</p>
                    </Right>
                    {showOptionsBubbleById &&
                      showOptionsBubbleById === chat.id && (
                        <OptionsBubble type="me">
                          <div
                            style={{
                              height: 37.68,
                              display: "flex",
                              alignItems: "center",
                              borderBottom: "1px solid #BDBDBD",
                              paddingLeft: 18.39,
                            }}
                          >
                            <p>Edit</p>
                          </div>
                          <div
                            style={{
                              paddingLeft: 18.39,
                              height: 41.32,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <p onClick={() => handleDeleteMessage(chat.id)}>
                              Delete
                            </p>
                          </div>
                        </OptionsBubble>
                      )}
                  </ChatBubble>
                </div>
              </div>
            ) : (
              <div>
                <p style={{ color: chat.nameColor }}>{chat.name}</p>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    // position: "relative",
                  }}
                >
                  <ChatBubble style={{ backgroundColor: chat.bubbleChatColor }}>
                    <Left>
                      <p>{chat.message}</p>
                      <p>{chat.createdAt}</p>
                    </Left>
                    {showOptionsBubbleById &&
                      showOptionsBubbleById === chat.id && (
                        <OptionsBubble type="you">
                          <div
                            style={{
                              height: 37.68,
                              display: "flex",
                              alignItems: "center",
                              borderBottom: "1px solid #BDBDBD",
                              paddingLeft: 12.46,
                            }}
                          >
                            <p>Share</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: 41.32,
                              paddingLeft: 13.55,
                            }}
                          >
                            <p onClick={() => handleReplyMessage(chat.id)}>
                              Reply
                            </p>
                          </div>
                        </OptionsBubble>
                      )}
                  </ChatBubble>
                  <Options
                    onClick={() =>
                      setShowOptionsBubbleById((showOptionsBubbleById) =>
                        showOptionsBubbleById === chat.id ? "" : chat.id
                      )
                    }
                  >
                    ...
                  </Options>
                </div>
              </div>
            )}
            {!chat.isStaff && (
              <>
                {i === 3 && (
                  <div
                    style={{
                      background: "#E9F3FF",
                      width: 141.83,
                      height: 33.89,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                    }}
                  >
                    <p style={{ color: "#2F80ED" }}>New Message</p>
                    <img src={ArrowDownWardIcon} />
                  </div>
                )}
                {i === 0 && <DateDivider>Today June 09,2021</DateDivider>}
              </>
            )}
          </Fragment>
        ))}
      </Body>
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
        )}
        {replyMessage && (
          <div>
            <strong>Replying to {replyMessage.name}</strong>
            <p>{replyMessage.message}</p>
            <div onClick={() => setReplyMessage("")}>x</div>
          </div>
        )}
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ paddingRight: 20, paddingLeft: 20 }}
        >
          <SendMessageInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
          <Button>Send</Button>
          {/* <Button type="submit" disabled={!message}>
            Send
          </Button> */}
        </form>
      </Footer>
      {/* </div> */}
      {/* </div> */}
    </InboxDetailBox>
  );
};

export default InboxDetail;
