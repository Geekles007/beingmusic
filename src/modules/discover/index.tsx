import React, {memo} from "react";
import styled from "styled-components";
import BannerDiscover from "./children/banner-discover";
import Recommended from "./children/recommended";
import TopMonth from "./children/top-month";
import SizedBox from "../../components/sized-box";

const DiscoverUIWrapper = styled.section`
    padding-bottom: 2rem;
`;

type DiscoverUIProps = {}

const DiscoverUI = ({}: DiscoverUIProps) => {

    return <DiscoverUIWrapper>
        <BannerDiscover />
        <Recommended />
        <SizedBox height={30} />
        <TopMonth />
    </DiscoverUIWrapper>

}

export default memo(DiscoverUI);
