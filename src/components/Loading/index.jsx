import React from "react";
import { LoadingAnimateIcon } from "../../icons";
import { Container, LoadingAnimateIconContainer, LoadingText } from "./styles";

const Loading = ({ title }) => {
  return (
    <Container>
      <LoadingAnimateIconContainer>
        <LoadingAnimateIcon width={85.41} height={85.41} />
      </LoadingAnimateIconContainer>
      <LoadingText>{title}...</LoadingText>
    </Container>
  );
};

export default Loading;
