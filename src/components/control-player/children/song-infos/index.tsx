import React, {memo} from "react";
import styled from "styled-components";
import SizedBox from "../../../sized-box";
import {FaHeart} from "react-icons/all";
import {theme} from "../../../../theme";
import FavouriteButton from "../favourite-button";

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
                src="https://www.mymp3tracks.com/uploads/cover/6141c910e7fcc782995883.jpg"
                alt="Wizkid album - Made in Lagos"/>
        </a>
        <div className="_infos">
            <strong>Blessed</strong>
            <span>Wizkid</span>
        </div>
        <FavouriteButton />
    </SongInfosWrapper>

}

export default memo(SongInfos);
