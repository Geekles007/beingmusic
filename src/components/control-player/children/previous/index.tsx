import React, {memo} from "react";
import styled from "styled-components";
import {BiSkipPrevious} from "react-icons/bi";

const PreviousButtonWrapper = styled.a`

`;

type PreviousButtonProps = {}

const PreviousButton = ({}: PreviousButtonProps) => {

    return <PreviousButtonWrapper>
        <BiSkipPrevious size={30}/>
    </PreviousButtonWrapper>

}

export default memo(PreviousButton);
