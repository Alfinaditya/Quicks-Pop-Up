import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { FastVisaSupportIcon, GroupChatIcon } from "../../../icons";
import { CircleNotification } from "../styles";
import {
  Chat,
  ChatHead,
  CircleNotificationContainer,
  Container,
  GroupChatIconContainer,
  LatestMessage,
  LatestMessageAt,
  SenderName,
  Title,
} from "./styles";

const InboxBody = ({ inboxes }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {inboxes.length ? (
        inboxes.map((inbox, i) => (
          <Container
            key={inbox.id}
            onClick={() => navigate(`${pathname}/${inbox.id}`)}
            isLast={inboxes.length - 1 === i}
          >
            <GroupChatIconContainer>
              {inbox.isStaff ? (
                <FastVisaSupportIcon style={{ width: 51, height: 34 }} />
              ) : (
                <GroupChatIcon style={{ width: 51, height: 34 }} />
              )}
            </GroupChatIconContainer>
            <Chat>
              <ChatHead>
                <Title>{inbox.title} </Title>
                <LatestMessageAt>{inbox.latestMessageAt}</LatestMessageAt>
              </ChatHead>
              <SenderName>{inbox.senderName} :</SenderName>{" "}
              <LatestMessage>{inbox.latestMessage}</LatestMessage>
            </Chat>
            {i === 0 && (
              <CircleNotificationContainer>
                <CircleNotification />
              </CircleNotificationContainer>
            )}
          </Container>
        ))
      ) : (
        <Loading title="Loading Chats" />
      )}
    </>
  );
};

export default InboxBody;
