import styled from "styled-components";
import { Input } from "../../../../sharedStyles";

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

export const DatePicker = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const DatePickerInput = styled(Input)`
  width: 193px;
  padding-left: 15.62px;
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
