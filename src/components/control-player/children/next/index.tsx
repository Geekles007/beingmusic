import React, {memo} from "react";
import styled from "styled-components";
import {BiSkipNext} from "react-icons/bi";

const NextButtonWrapper = styled.a`

`;

type NextButtonProps = {}

const NextButton = ({}: NextButtonProps) => {

    return <NextButtonWrapper>
        <BiSkipNext size={30}/>
    </NextButtonWrapper>

}

export default memo(NextButton);
