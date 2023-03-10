import styled, { css } from "styled-components";
import { Box, Input } from "../../sharedStyles";

export const InboxBox = styled(Box)`
  padding: 22px 32px;
`;

// export const Head = styled.div`
//   position: relative;
//   margin-bottom: 22px;
// `;

// export const SearchInput = styled(Input)`
//   /* margin-bottom: 22px; */
//   width: 100%;
//   padding-left: 58.82px;
// `;

// export const Container = styled.div`
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
//   /* justify-content: space-around; */
//   margin-bottom: 22px;
//   padding-bottom: 36px;
//   ${(props) =>
//     !props.isLast &&
//     css`
//       border-bottom: 1px solid #828282;
//     `};
//   cursor: pointer;
// `;

// export const SearchIconContainer = styled.div`
//   position: absolute;
//   top: 14px;
//   right: 86.32px;
//   width: 12px;
//   height: 12px;
// `;

// export const Chat = styled.div`
//   margin-left: 12px;
//   /* flex: 1; */
// `;

// export const ChatHead = styled.div`
//   display: flex;
//   align-items: center;
//   /* width: 414.73px; */
//   margin-bottom: 9.76px;
// `;

export const LatestMessage = styled.p`
  font-size: 13px;
`;

export const CircleNotificationContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 10px;
`;

export const CircleNotification = styled.div`
  width: 10px;
  height: 10px;
  background: #eb5757;
  border-radius: 50%;
  text-align: right;
`;
