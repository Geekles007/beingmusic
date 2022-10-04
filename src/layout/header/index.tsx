import React, {memo} from "react";
import styled from "styled-components";
import UserAvatar from "../../components/user-avatar";
import NotificationsButton from "../../components/notifications-button";
import SearchInput from "../../components/search-input";

const HeaderUIWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  
  height: 50px;
  padding: 1rem 2rem;
  z-index: 99;
  
  ._actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media(max-width: 1024px) {
    position: fixed;
  }
`;

type HeaderUIProps = {}

const HeaderUI = ({}: HeaderUIProps) => {

    return <HeaderUIWrapper>
        <SearchInput />
        <div className="_actions">
            <NotificationsButton />
            <UserAvatar />
        </div>
    </HeaderUIWrapper>

}

export default memo(HeaderUI);
