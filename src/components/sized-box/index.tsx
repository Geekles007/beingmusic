import React, {memo} from "react";
import styled from "styled-components";

const SizedBoxWrapper = styled.div<{ width?: number; height?: number }>`
  height: ${({height}) => height}px;
  width: ${({width}) => width}px;
`;

type SizedBoxProps = {
    children?: JSX.Element;
    height?: number;
    width?: number;
}

const SizedBox = ({children, height, width}: SizedBoxProps) => {

    return <SizedBoxWrapper height={height} width={width}>
        {children}
    </SizedBoxWrapper>

}

export default memo(SizedBox);
