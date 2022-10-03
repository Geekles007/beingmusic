import React, {memo} from "react";
import styled from "styled-components";
import BannerDiscover from "./children/banner-discover";

const DiscoverUIWrapper = styled.section`
  overflow-y: scroll;
`;

type DiscoverUIProps = {}

const DiscoverUI = ({}: DiscoverUIProps) => {

    return <DiscoverUIWrapper>
        <BannerDiscover />
    </DiscoverUIWrapper>

}

export default memo(DiscoverUI);
