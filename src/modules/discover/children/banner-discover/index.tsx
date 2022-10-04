import React, {memo} from "react";
import styled from "styled-components";
import {BiLike, BiPlay, BiShare} from "react-icons/bi";

const BannerDiscoverWrapper = styled.div<{ bannerImage: string }>`
  height: 500px;
  background-color: ${({theme}) => theme.white};
  background: url(${({bannerImage}) => bannerImage});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 2rem;

  .banner--infos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 6rem;
    align-items: flex-start;

    ._gender {
      text-transform: uppercase;
      background-color: rgba(0, 0, 0, .3);
      padding: .3rem .8rem;
      font-size: .9rem;
    }

    h2 {
      padding: 0;
      margin: 0;
      font-size: 4rem;
      width: 550px;
      line-height: 70px;
      font-weight: 700;
    }
    
    ._actions {
      display: flex;
      gap: .5rem;
      
      .play--action {
        background-color: ${({theme}) => theme.primary};
        padding: .8rem 1.3rem;
        width: 120px;
        
        .play--icon {
          position: absolute;
          right: .5rem;
        }
      }
      
      .button--icon {
        background-color: ${({theme}) => theme.dark};
        padding: .5rem .9rem;
      }
    }
  }
  
  @media(max-width: 500px) {
    background-size: cover;
    
    .banner--infos {
      h2 {
        width: 100%;
        font-size: 2.5rem;
        line-height: 50px;
      }
    }
    
  }
`;

const GenderName = ({name}: { name: string }) => {
    return <div className={"_gender"}>
        <span>{name}</span>
    </div>
}

type BannerDiscoverProps = {}

const BannerDiscover = ({}: BannerDiscoverProps) => {

    return <BannerDiscoverWrapper
        bannerImage={"https://s1.ticketm.net/dam/a/b05/8aa03826-d46c-47f6-882f-96cc1fd22b05_1466981_TABLET_LANDSCAPE_LARGE_16_9.jpg"}>
        <div className="banner--infos">
            <GenderName name={"Afrobeat"}/>
            <h2>Wizkid's New Album</h2>
            <div className="_actions">
                <button className={"_btn play--action"}>
                    <span>Play</span>
                    <BiPlay className={"play--icon"} size={19} />
                </button>
                <button className={"_btn button--icon"}>
                    <BiLike size={15} className={"play--icon"} />
                </button>
                <button className={"_btn button--icon"}>
                    <BiShare size={15} className={"play--icon"} />
                </button>
            </div>
        </div>
    </BannerDiscoverWrapper>

}

export default memo(BannerDiscover);
