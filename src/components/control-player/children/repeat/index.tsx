import React, {memo} from "react";
import styled from "styled-components";
import {BiRepeat} from "react-icons/bi";

const RepeatButtonWrapper = styled.a`

`;

type RepeatButtonProps = {}

const RepeatButton = ({}: RepeatButtonProps) => {

    return <RepeatButtonWrapper>
        <BiRepeat size={22} />
    </RepeatButtonWrapper>

}

export default memo(RepeatButton);
