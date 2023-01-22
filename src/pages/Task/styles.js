import styled from "styled-components";
import { Box } from "../../sharedStyles";

export const TaskBox = styled(Box)`
  padding: 22px 32px;
`;

export const Head = styled.div`
  margin-bottom: 22px;
`;

export const Title = styled.p`
  text-decoration: ${(props) => props.isFinished && "line-through"};
`;
export const Body = styled.div`
  display: ${(props) => props.isFinished && "none"};
`;
export const Dropdown = styled.div``;
export const DropdownButton = styled.div``;
export const DropdownValue = styled.div``;
