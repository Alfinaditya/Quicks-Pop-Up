import styled from "styled-components";
import { Input } from "../../../sharedStyles";

export const Head = styled.div`
  position: relative;
  margin-bottom: 22px;
`;

export const SearchInput = styled(Input)`
  /* margin-bottom: 22px; */
  width: 100%;
  height: 32px;
  padding-left: 58.82px;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  top: 8px;
  /* top: 50%; */
  right: 86.32px;
  width: 12px;
  height: 12px;
`;
