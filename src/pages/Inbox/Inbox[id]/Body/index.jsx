import React, { Fragment, useState } from "react";
import { USER_ID } from "../../../../helpers/const";
import { ArrowDownIcon, OptionsIcon } from "../../../../icons";
import {
  Body,
  ChatBubble,
  ChatBubbleContainer,
  DateDivider,
  Delete,
  DeleteText,
  Edit,
  EditText,
  Message,
  NewMessageAlert,
  NewMessageText,
  OptionsBubble,
  Reply,
  ReplyText,
  SenderName,
  Share,
  ShareText,
  Time,
} from "./styles";

const InboxDetailBody = ({
  inbox,
  setInbox,
  replyMessage,
  setReplyMessage,
}) => {
  const [showOptionsBubbleById, setShowOptionsBubbleById] = useState("");
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
                <OptionsIcon
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setShowOptionsBubbleById((showOptionsBubbleById) =>
                      showOptionsBubbleById === chat.id ? "" : chat.id
                    )
                  }
                />
                {/* <img
                src={OptionsIcon}
                onClick={() =>
                  setShowOptionsBubbleById((showOptionsBubbleById) =>
                    showOptionsBubbleById === chat.id ? "" : chat.id
                  )
                }
              /> */}
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
                        <Delete onClick={() => handleDeleteMessage(chat.id)}>
                          <DeleteText>Delete</DeleteText>
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
                        <Share>
                          <ShareText>Share</ShareText>
                        </Share>
                        <Reply onClick={() => handleReplyMessage(chat.id)}>
                          <ReplyText>Reply</ReplyText>
                        </Reply>
                      </OptionsBubble>
                    )}
                </ChatBubble>
                <OptionsIcon
                  style={{ cursor: "pointer" }}
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
                <NewMessageAlert>
                  <NewMessageText>New Message</NewMessageText>
                  <ArrowDownIcon />
                </NewMessageAlert>
              )}
              {i === 0 && <DateDivider>Today June 09,2021</DateDivider>}
            </>
          )}
        </Fragment>
      ))}
    </Body>
  );
};

export default InboxDetailBody;
