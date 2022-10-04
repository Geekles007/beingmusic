import React, {memo} from "react";
import styled from "styled-components";

const UserAvatarWrapper = styled.a`
  width: 35px;
  height: 35px;
  border: 1px solid ${({theme}) => theme.white};
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  //overflow-y: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  
  &::after {
    display: block;
    content: "";
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.primary};
    
    position: absolute;
    bottom: 0;
    right: 0;
    
    border: 1px solid ${({theme}) => theme.white};
  }
`;

type UserAvatarProps = {}

const UserAvatar = ({}: UserAvatarProps) => {

    return <UserAvatarWrapper>
        <img src="https://media.istockphoto.com/photos/portrait-of-a-girl-picture-id938707792?k=20&m=938707792&s=170667a&w=0&h=WLLitTRIHDbVCSfnYLBlkNS6avZnf_jLxPkGsY5SltU=" alt="User avatar"/>
    </UserAvatarWrapper>

}

export default memo(UserAvatar);
