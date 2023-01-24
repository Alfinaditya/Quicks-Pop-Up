import styled from "styled-components";
import { Box, Input } from "../../sharedStyles";

export const TaskBox = styled(Box)`
  padding: 22px 32px;
`;

export const Head = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  display: flex;
  align-items: start;
`;

export const Title = styled.strong`
  /* margin-left: 23.67px; */
  font-size: 14px;
  text-decoration: ${(props) => props.isFinished && "line-through"};
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const Body = styled.div`
  margin-top: 17.11px;
  margin-left: 23.67px;
  display: ${(props) => props.isFinished && "none"};
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownText = styled.span`
  margin-right: 12px;
`;

export const DropdownValues = styled.div`
  width: 288px;
  position: absolute;
  bottom: -110px;
  border-radius: 10px;
  z-index: 999;
  background: #ffffff;
  border: 1px solid #828282;
`;

export const DropdownButton = styled.div`
  padding-top: 10px;
  padding-left: 14px;
  padding-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #828282;
  width: 118.55px;
`;

export const DropdownValue = styled.div`
  border-bottom: 1px solid #828282;
  padding: 15px;
`;

export const DatePicker = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const DatePickerInput = styled(Input)`
  width: 193px;
  padding-left: 15.62px;
`;

export const TitleInput = styled(Input)`
  width: 380px;
  padding-left: 14.22px;
`;

export const TaskItem = styled.div`
  margin-bottom: 22px;
  border-bottom: 1px solid #828282;
  padding-bottom: 23.97px;
`;

export const TaskItemContainer = styled.div`
  display: flex;
`;
