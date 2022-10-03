import React, {memo} from "react";
import styled from "styled-components";
import BannerDiscover from "./children/banner-discover";
import Recommended from "./children/recommended";

const DiscoverUIWrapper = styled.section`
    
`;

type DiscoverUIProps = {}

const DiscoverUI = ({}: DiscoverUIProps) => {

    return <DiscoverUIWrapper>
        <BannerDiscover />
        <Recommended />
    </DiscoverUIWrapper>

}

export default memo(DiscoverUI);
