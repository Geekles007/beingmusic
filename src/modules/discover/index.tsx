import React, {memo} from "react";
import styled from "styled-components";
import BannerDiscover from "./children/banner-discover";
import Recommended from "./children/recommended";
import TopMonth from "./children/top-month";
import SizedBox from "../../components/sized-box";
import DiscoverController from "./controller";

const DiscoverUIWrapper = styled.section`
    padding-bottom: 2rem;
`;

type DiscoverUIProps = {}

const DiscoverUI = ({}: DiscoverUIProps) => {

    const {albums} = DiscoverController;

    return <DiscoverUIWrapper>
        <BannerDiscover />
        <Recommended albums={albums} title={"Recommended Albums"}/>
        <SizedBox height={30} />
        <TopMonth />
        <SizedBox height={30} />
        <Recommended albums={albums} title={"Afro music"} />
        <SizedBox height={30} />
        <Recommended albums={albums} title={"New trends"} />
        <SizedBox height={30} />
    </DiscoverUIWrapper>

}

export default memo(DiscoverUI);
