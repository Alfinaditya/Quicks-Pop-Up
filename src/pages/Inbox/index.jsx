import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InboxBox, Container, SearchInput, SenderName, Title } from "./styles";
import inboxesFromServer from "./inbox.json";
import Loading from "../../components/Loading";
import GroupChatIcon from "../../icons/group_chat_icon.svg";
import fastVisaSupport from "../../icons/fastvisa_support.svg";
import searchIcon from "../../icons/search_icon.svg";

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
      <div
        style={{
          position: "relative",
          marginBottom: "22px",
        }}
      >
        <SearchInput type="search" placeholder="Search" />
        <img
          src={searchIcon}
          style={{ position: "absolute", top: 14, right: 86.32 }}
        />
      </div>
      {inboxes.length ? (
        inboxes.map((inbox, i) => (
          <Container
            key={inbox.id}
            onClick={() => navigate(`${pathname}/${inbox.id}`)}
            isLast={inboxes.length - 1 === i}
          >
            <img src={inbox.isStaff ? fastVisaSupport : GroupChatIcon} alt="" />
            <div style={{ marginLeft: "12px", flex: 1 }}>
              <div style={{ display: "flex" }}>
                <Title>{inbox.title} </Title>
                <p>{inbox.latestMessageAt}</p>
              </div>
              <SenderName>{inbox.senderName} :</SenderName>
              <p>{inbox.latestMessage}</p>
            </div>
            {i === 0 && (
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: "#EB5757",
                  borderRadius: "50%",
                  textAlign: "right",
                }}
              ></div>
            )}
          </Container>
        ))
      ) : (
        <Loading title="Loadng Chats" />
      )}
    </InboxBox>
  );
};

export default Inbox;
