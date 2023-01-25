import styled from "styled-components";
import { Input } from "../../../sharedStyles";

export const TaskItem = styled.div`
  margin-bottom: 22px;
  border-bottom: 1px solid #828282;
  padding-bottom: 23.97px;
`;

export const TaskItemContainer = styled.div`
  display: flex;
`;

export const TaskCheckbox = styled.input`
  align-self: start;
  margin-top: 9px;
  cursor: pointer;
`;

export const TaskItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 23.67px;
`;

export const Title = styled.strong`
  width: 335.37px;
  font-size: 14px;
  text-decoration: ${(props) => props.isFinished && "line-through"};
`;

export const TitleInput = styled(Input)`
  width: 380px;
  padding-left: 14.22px;
`;

export const DaysLeft = styled.p`
  color: #eb5757;
  font-size: 13px;
`;

export const CreatedAt = styled.p`
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const TaskToolsContainer = styled.div`
  display: flex;
`;

export const CollapseIconContainer = styled.div`
  display: ${(props) => props.isHidden && "none"};
  cursor: pointer;
`;

export const TaskOptionContainer = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

export const OptionsBubble = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  background: #ffffff;
  border-radius: 5px;
  padding-left: 18.39px;
  border: 1px solid #828282;
  height: 43px;
  z-index: 999;
  color: #eb5757;
  width: 126px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const OptionsBubbleText = styled.span`
  color: #eb5757;
`;

export const CollapseBody = styled.div`
  margin-top: 17.11px;
  margin-left: 23.67px;
  display: ${(props) => props.isFinished && "none"};
`;
