import React, {memo} from "react";
import styled from "styled-components";

const PostBannerWrapper = styled.div`
  margin: 0 2rem;
  height: 250px;
  background-color: ${({theme}) => theme.dark};
  //background: url("https://events.mtn.ng/wp-content/uploads/2022/06/Abuja-event-ASAP.jpeg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

type PostBannerProps = {}

const PostBanner = ({}: PostBannerProps) => {

    return <PostBannerWrapper>
        <h1>ADS</h1>
    </PostBannerWrapper>

}

export default memo(PostBanner);
