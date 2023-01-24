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
  OptionsBubble,
  DateDivider,
  HeadText,
  Title,
  Participants,
  SenderName,
  ChatBubbleContainer,
  Edit,
  Delete,
  DeleteText,
  EditText,
  Message,
  Reply,
  Share,
  ReplyText,
  NewMessageContainer,
  NewMessageText,
  ReplyingTitle,
  ReplyingMessage,
  ReplyingMessageContainer,
  ReplyingMessageHead,
  BottomLeftContainer,
  SendMessageForm,
  ShareText,
  Time,
} from "./style";
import { USER_ID } from "../../../helpers/const";
import Button from "../../../components/Button";
import ArrowBackIcon from "../../../icons/arrow_back_icon.svg";
import CloseIcon from "../../../icons/close_icon.svg";
import ArrowDownWardIcon from "../../../icons/arrow_downward_icon.svg";
import OptionsIcon from "../../../icons/options_icon.svg";

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
        />
        <HeadText>
          <Title>{inbox.title}</Title>
          <Participants>
            {!inbox.isStaff && inbox.participants} Participants
          </Participants>
        </HeadText>
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
              <>
                {i > 0 ? (
                  <>
                    {chat.userId !== inbox.chats[i - 1].userId && (
                      <SenderName type="me" color={chat.nameColor}>
                        {chat.name}
                      </SenderName>
                    )}
                  </>
                ) : (
                  <SenderName type="me" color={chat.nameColor}>
                    {chat.name}
                  </SenderName>
                )}
                <ChatBubbleContainer type="me">
                  <img
                    src={OptionsIcon}
                    onClick={() =>
                      setShowOptionsBubbleById((showOptionsBubbleById) =>
                        showOptionsBubbleById === chat.id ? "" : chat.id
                      )
                    }
                  />
                  <ChatBubble
                    type="me"
                    style={{
                      background: chat.bubbleChatColor,
                    }}
                  >
                    <Message>
                      <p>{chat.message}</p>
                      <Time>{chat.createdAt}</Time>
                    </Message>
                    {showOptionsBubbleById &&
                      showOptionsBubbleById === chat.id && (
                        <OptionsBubble type="me">
                          <Edit>
                            <EditText>Edit</EditText>
                          </Edit>
                          <Delete>
                            <DeleteText
                              onClick={() => handleDeleteMessage(chat.id)}
                            >
                              Delete
                            </DeleteText>
                          </Delete>
                        </OptionsBubble>
                      )}
                  </ChatBubble>
                </ChatBubbleContainer>
              </>
            ) : (
              <>
                <SenderName style={{ color: chat.nameColor }}>
                  {chat.name}
                </SenderName>
                <ChatBubbleContainer>
                  <ChatBubble style={{ backgroundColor: chat.bubbleChatColor }}>
                    <Message>
                      <p>{chat.message}</p>
                      <Time>{chat.createdAt}</Time>
                    </Message>
                    {showOptionsBubbleById &&
                      showOptionsBubbleById === chat.id && (
                        <OptionsBubble type="you">
                          <Share
                            style={{
                              height: 37.68,
                              display: "flex",
                              alignItems: "center",
                              borderBottom: "1px solid #BDBDBD",
                              paddingLeft: 12.46,
                            }}
                          >
                            <ShareText>Share</ShareText>
                          </Share>
                          <Reply
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: 41.32,
                              paddingLeft: 13.55,
                            }}
                          >
                            <ReplyText
                              onClick={() => handleReplyMessage(chat.id)}
                            >
                              Reply
                            </ReplyText>
                          </Reply>
                        </OptionsBubble>
                      )}
                  </ChatBubble>
                  <img
                    src={OptionsIcon}
                    onClick={() =>
                      setShowOptionsBubbleById((showOptionsBubbleById) =>
                        showOptionsBubbleById === chat.id ? "" : chat.id
                      )
                    }
                  />
                </ChatBubbleContainer>
              </>
            )}
            {!chat.isStaff && (
              <>
                {i === 3 && (
                  <NewMessageContainer>
                    <NewMessageText>New Message</NewMessageText>
                    <img src={ArrowDownWardIcon} />
                  </NewMessageContainer>
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
        <SendMessageForm onSubmit={(e) => handleSubmit(e)}>
          <BottomLeftContainer>
            {replyMessage && (
              <ReplyingMessageContainer>
                <ReplyingMessageHead>
                  <ReplyingTitle>Replying to {replyMessage.name}</ReplyingTitle>
                  <img onClick={() => setReplyMessage("")} src={CloseIcon} />
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
      {/* </div> */}
      {/* </div> */}
    </InboxDetailBox>
  );
};

export default InboxDetail;
