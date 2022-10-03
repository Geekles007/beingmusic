import React, {memo} from "react";
import styled from "styled-components";
import {MdPlaylistPlay} from "react-icons/all";

const PlayListButtonWrapper = styled.a`

`;

type PlayListButtonProps = {}

const PlayListButton = ({}: PlayListButtonProps) => {

    return <PlayListButtonWrapper>
        <MdPlaylistPlay size={22} />
    </PlayListButtonWrapper>

}

export default memo(PlayListButton);
