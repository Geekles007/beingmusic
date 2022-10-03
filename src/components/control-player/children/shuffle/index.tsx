import React, {memo} from "react";
import styled from "styled-components";
import {BiShuffle} from "react-icons/all";

const ShuffleButtonWrapper = styled.a`

`;

type ShuffleButtonProps = {}

const ShuffleButton = ({}: ShuffleButtonProps) => {

    return <ShuffleButtonWrapper>
        <BiShuffle size={22} />
    </ShuffleButtonWrapper>

}

export default memo(ShuffleButton);
