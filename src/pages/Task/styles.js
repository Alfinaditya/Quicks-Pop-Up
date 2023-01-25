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
  width: 335.37px;
  font-size: 14px;
  text-decoration: ${(props) => props.isFinished && "line-through"};
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const CollapseBody = styled.div`
  margin-top: 17.11px;
  margin-left: 23.67px;
  display: ${(props) => props.isFinished && "none"};
`;

export const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
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

export const TaskItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 23.67px;
`;

export const TaskItemContainer = styled.div`
  display: flex;
`;

export const TaskCheckbox = styled.input`
  align-self: start;
  margin-top: 9px;
  cursor: pointer;
`;

export const TaskToolsContainer = styled.div`
  display: flex;
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
  color: "#EB5757";
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

export const CollapseIconContainer = styled.div`
  display: ${(props) => props.isHidden && "none"};
  cursor: pointer;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17.11px;
  margin-bottom: 16.22px;
`;

export const ClockIconContainer = styled.div`
  margin-right: 19.67px;
  width: 16.67px;
  height: 16.67px;
  cursor: pointer;
`;

export const CalendarIconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const HiddenDatePickerInput = styled.input`
  visibility: hidden;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-bottom: 15.6px;
`;

export const PenIconContainer = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 19.67px;
  cursor: pointer;
`;

export const DescriptionTextArea = styled.textarea`
  padding: 12px;
  width: 100%;
  border-radius: 5px;
`;

export const StickersContainer = styled.div`
  display: flex;
  position: relative;
  background: #f9f9f9;
  width: 100%;
  align-items: center;
  padding-left: 11px;
  padding-top: 7px;
  padding-bottom: 13.42px;
  align-items: center;
  border-radius: 5px;
`;

export const BookMarkIconContainer = styled.div`
  width: 14.17px;
  height: 18.33px;
  cursor: pointer;
`;

export const CurrentStickersContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 49px;
  margin-left: 28px;
  flex-wrap: wrap;
  align-items: center;
  gap: 9.96px;
`;

export const CurrentSticker = styled.div`
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

export const CurrentStickerName = styled.div`
  font-size: 12px;
`;

export const AddStickerContainer = styled.div`
  width: 277px;
  border-radius: 5px;
  background: #ffffff;
  position: absolute;
  z-index: 999;
  top: 50px;
  left: 0;
  cursor: pointer;
  padding: 10px;
`;

export const Sticker = styled.div`
  background-color: ${(props) => props.color};
  height: 28px;
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  padding: 14.07px;
  border-radius: 5px;
`;

export const StickerName = styled.p`
  font-size: 12px;
`;
