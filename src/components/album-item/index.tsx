import React, {memo} from "react";
import styled from "styled-components";
import {IAlbum} from "../../models/IAlbum";

const AlbumItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ._cover {
    width: 200px;
    height: 200px;
    
    img {
      object-position: center;
      object-fit: cover;
      width: 100%;
    }
  }
  
  strong  {
    font-size: 1rem;
    font-weight: 700;
    display: block;
    margin-top: .5rem;
  }
  
  span {
    font-size: .8rem;
    color: ${({theme}) => theme.bright};
  }
`;

type AlbumItemProps = {
    item: IAlbum;
}

const AlbumItem = ({item}: AlbumItemProps) => {

    return <AlbumItemWrapper>
        <div className="_cover">
            <img src={item?.cover} loading={"lazy"} alt={item?.title}/>
        </div>
        <strong>{item?.title}</strong>
        <span>{item?.artist?.name}</span>
    </AlbumItemWrapper>

}

export default memo(AlbumItem);
