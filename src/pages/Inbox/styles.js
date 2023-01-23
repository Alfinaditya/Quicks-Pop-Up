import styled, { css } from "styled-components";
import { Box, Input } from "../../sharedStyles";

export const InboxBox = styled(Box)`
  padding: 22px 32px;
`;

export const SearchInput = styled(Input)`
  /* margin-bottom: 22px; */
  width: 100%;
  padding-left: 58.82px;
`;

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 22px;
  padding-bottom: 36px;
  ${(props) =>
    !props.isLast &&
    css`
      border-bottom: 1px solid #828282;
    `};
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 16px;
  margin-right: 16px;
  color: #2f80ed;
`;

export const SenderName = styled.h2`
  font-weight: bold;
  font-size: 14px;
`;
