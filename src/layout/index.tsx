import React, {memo} from "react";
import styled from "styled-components";
import SideBar from "./sidebar";
import ControlPlayer from "../components/control-player";
import {TTheme} from "../theme";
import {Outlet} from "react-router-dom";

const LayoutUIWrapper = styled.div`
  overflow-y: hidden;
  
  ._body {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    height: calc(100vh - ${({theme}: { theme: TTheme }) => theme.controlPanelHeight}px);
    
    ._sidebar {
      grid-column: 1/3;
    }

    ._content {
      grid-column: 3/13;
    }
  }
`;

type LayoutUIProps = {
}

const LayoutUI = ({}: LayoutUIProps) => {

    return <LayoutUIWrapper>
        <div className="_body">
            <div className="_sidebar">
                <SideBar />
            </div>
            <div className="_content">
                <Outlet />
            </div>
        </div>
        <ControlPlayer />
    </LayoutUIWrapper>

}

export default memo(LayoutUI);
