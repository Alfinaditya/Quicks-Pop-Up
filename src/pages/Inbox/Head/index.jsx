import React from "react";
import { SearchIcon } from "../../../icons";
import { Head, SearchIconContainer, SearchInput } from "./styles";

const InboxHead = () => {
  return (
    <Head>
      <SearchInput type="search" placeholder="Search" />
      <SearchIconContainer>
        <SearchIcon fill={"#333333"} style={{ width: 12, height: 12 }} />
      </SearchIconContainer>
    </Head>
  );
};

export default InboxHead;
