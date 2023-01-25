import React, { useState } from "react";
import { useParams } from "react-router-dom";
import inboxesFromServer from "../inbox.json";
import { InboxDetailBox } from "./style";
import InboxDetailHead from "./Head";
import InboxDetailBody from "./Body";
import InboxFooter from "./Footer";

const InboxDetail = () => {
  const { id } = useParams();
  const [replyMessage, setReplyMessage] = useState("");
  const [inbox, setInbox] = useState(
    inboxesFromServer.find((inbox) => {
      return inbox.id === id;
    })
  );

  return (
    <InboxDetailBox>
      <InboxDetailHead inbox={inbox} />
      <hr />
      <InboxDetailBody
        inbox={inbox}
        setInbox={setInbox}
        replyMessage={replyMessage}
        setReplyMessage={setReplyMessage}
      />
      <InboxFooter
        inbox={inbox}
        setInbox={setInbox}
        replyMessage={replyMessage}
        setReplyMessage={setReplyMessage}
      />
    </InboxDetailBox>
  );
};

export default InboxDetail;
