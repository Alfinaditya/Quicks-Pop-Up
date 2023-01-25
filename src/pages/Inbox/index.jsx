import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  InboxBox,
  Container,
  SearchInput,
  SenderName,
  Title,
  GroupChatIconContainer,
  Chat,
  ChatHead,
  CircleNotification,
  SearchIconContainer,
  Head,
  LatestMessageAt,
  LatestMessage,
  CircleNotificationContainer,
} from "./styles";
import inboxesFromServer from "./inbox.json";
import Loading from "../../components/Loading";
import { GroupChatIcon, FastVisaSupportIcon, SearchIcon } from "../../icons";

const Inbox = () => {
  const { pathname } = useLocation();
  const [inboxes, setInboxes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setInboxes(inboxesFromServer);
    }, 2000);
  }, []);

  return (
    <InboxBox>
      <Head>
        <SearchInput type="search" placeholder="Search" />
        <SearchIconContainer>
          <SearchIcon style={{ width: 12, height: 12 }} />
        </SearchIconContainer>
      </Head>
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
    </InboxBox>
  );
};

export default Inbox;
