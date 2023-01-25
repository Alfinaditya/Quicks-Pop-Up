import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, CloseIcon } from "../../../../icons";
import {
  ArrowBackIconContainer,
  CloseIconContainer,
  Head,
  HeadText,
  Participants,
  Title,
} from "./styles";

const InboxDetailHead = ({ inbox }) => {
  const navigate = useNavigate();
  return (
    <Head>
      <ArrowBackIconContainer onClick={() => navigate("/inbox")}>
        <ArrowBackIcon />
      </ArrowBackIconContainer>
      <HeadText>
        <Title>{inbox.title}</Title>
        <Participants>
          {!inbox.isStaff && inbox.participants} Participants
        </Participants>
      </HeadText>
      <CloseIconContainer>
        <CloseIcon />
      </CloseIconContainer>
    </Head>
  );
};

export default InboxDetailHead;
