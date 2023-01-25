import React, { useEffect, useState } from "react";
import { InboxBox } from "./styles";
import inboxesFromServer from "./inbox.json";
import InboxHead from "./Head";
import InboxBody from "./Body";
import Loading from "../../components/Loading";

const Inbox = () => {
  const [inboxes, setInboxes] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setInboxes(inboxesFromServer);
    }, 2000);
  }, []);
  return (
    <InboxBox>
      <InboxHead />
      <InboxBody inboxes={inboxes} />
    </InboxBox>
  );
};

export default Inbox;
