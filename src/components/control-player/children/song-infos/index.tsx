import React, {memo} from "react";
import styled from "styled-components";
import SizedBox from "../../../sized-box";
import {FaHeart} from "react-icons/all";
import {theme} from "../../../../theme";
import FavouriteButton from "../FavouriteButton";

const SongInfosWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .album--cover {
    height: 50px;
    width: 50px;
    
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  
  ._infos {
    display: flex;
    flex-direction: column;
    
    strong {
      font-size: .8rem;
    }
    
    span {
      font-size: .7rem;
    }
  }
`;

type SongInfosProps = {}

const SongInfos = ({}: SongInfosProps) => {

    return <SongInfosWrapper>
        <a className="album--cover">
            <img
                src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ims2dgugyjr0elv3szof/jid-the-forever-story?fimg-ssr-default"
                alt="JID album - The forever story"/>
        </a>
        <div className="_infos">
            <strong>Dance now</strong>
            <span>JID</span>
        </div>
        <FavouriteButton />
    </SongInfosWrapper>

}

export default memo(SongInfos);
