import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InboxBox, Container, SearchInput, SenderName, Title } from "./styles";
import inboxesFromServer from "./inbox.json";
import Loading from "../../components/Loading";

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
      <SearchInput type="search" />
      {inboxes.length ? (
        inboxes.map((inbox) => (
          <Container
            key={inbox.id}
            onClick={() => navigate(`${pathname}/${inbox.id}`)}
          >
            <Title>{inbox.title}</Title>
            <SenderName>{inbox.senderName}</SenderName>
            <p>{inbox.latestMessageAt}</p>
            <p>{inbox.latestMessage}</p>
          </Container>
        ))
      ) : (
        <Loading title="Loadng Chats" />
      )}
    </InboxBox>
  );
};

export default Inbox;
