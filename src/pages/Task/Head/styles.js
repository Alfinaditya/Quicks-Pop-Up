import styled from "styled-components";

export const Head = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  display: flex;
  align-items: start;
`;

export const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropdownButton = styled.div`
  padding-top: 10px;
  padding-left: 14px;
  padding-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #828282;
  width: 118.55px;
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

export const DropdownValue = styled.div`
  border-bottom: 1px solid #828282;
  padding: 15px;
`;
