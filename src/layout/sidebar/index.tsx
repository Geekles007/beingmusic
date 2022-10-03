import React, {memo} from "react";
import styled from "styled-components";
import {TTheme} from "../../theme";
import logo from "./../../assets/logo.png";
import SizedBox from "../../components/sized-box";
import NavBoxes from "./children/nav-boxes";

const SideBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}: { theme: TTheme }) => theme.secondary};
  overflow-y: scroll;
  
  ._content {
    height: 100%;
    padding: 2rem 0;
    
    ._logo {
      display: flex;
      padding-left: 1rem;
      height: 50px;
      
      align-items: center;
      gap: .5rem;
      font-weight: 600;
      
      img {
        height: 100%;
      }
    }
  }
`;

interface SideBarProps {

}

const SideBar = ({}: SideBarProps) => {

    return <SideBarWrapper>
        <div className="_content">
            <div className="_logo">
                <img src={logo} alt="Being music logo"/>
                <strong>Being Music</strong>
            </div>
            <SizedBox height={40} />
            <NavBoxes />
        </div>
    </SideBarWrapper>

}

export default memo(SideBar);
