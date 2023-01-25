import React from "react";
import { SearchIcon } from "../../icons";
import { Container, SearchIconContainer, SearchInput } from "./styles";

const Header = () => {
  return (
    <Container>
      <SearchInput type="search" />
      <SearchIconContainer>
        <SearchIcon fill="#F2F2F2" style={{ width: 16, height: 16 }} />
      </SearchIconContainer>
    </Container>
  );
};

export default Header;
