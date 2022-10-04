import React, {memo} from "react";
import styled from "styled-components";
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
  
  @media(max-width: 500px) {
    ._infos {
      display: none;
    }
    
    .album--cover {
      display: none !important;
    }
  }
`;

type SongInfosProps = {}

const SongInfos = ({}: SongInfosProps) => {

    return <SongInfosWrapper>
        <a className="album--cover">
            <img
                src="https://kamerlyrics.net/assets/uploads/chacun-sa-chance-krys-m.jpg"
                alt="Krys M - Chacun sa chance"/>
        </a>
        <div className="_infos">
            <strong>Chacun sa chance</strong>
            <span>Krys M</span>
        </div>
        <FavouriteButton />
    </SongInfosWrapper>

}

export default memo(SongInfos);
