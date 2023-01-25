import styled from "styled-components";
import { Input } from "../../sharedStyles";

export const SearchInput = styled(Input)`
  width: 100%;
  height: 58px;
  background: #4f4f4f;
  border-radius: 0;
`;

export const Container = styled.div`
  position: relative;
  background: red;
`;

export const SearchIconContainer = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 19px;
  top: 19px;
`;
