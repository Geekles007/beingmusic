import React, {memo} from "react";
import styled from "styled-components";
import {BiBell} from "react-icons/all";

const NotificationsButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  
  position: relative;

  &::after {
    display: block;
    content: "";
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.primary};

    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

type NotificationsButtonProps = {}

const NotificationsButton = ({}: NotificationsButtonProps) => {

    return <NotificationsButtonWrapper>
        <BiBell size={24} />
    </NotificationsButtonWrapper>

}

export default memo(NotificationsButton);
