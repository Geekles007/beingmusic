import React, {memo} from "react";
import styled from "styled-components";

const TopItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  background-color: ${({theme}) => theme.darkLess};
  height: 50px;
  padding: .5rem 1rem;
  
  ._rank {
    font-size: .7rem;
  }
  
  ._img {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.dark};
    
    img {
      height: 60%;
    }
  }
  
  .top--infos {
    font-size: .8rem;
    display: flex;
    flex-direction: column;
  }
`;

type TopItemProps = {
    rank: number;
}

const TopItem = ({rank}: TopItemProps) => {

    return <TopItemWrapper>
        <span className="_rank">{rank}</span>
        <div className="_img">
            <img src="/logo.png" alt=""/>
        </div>
        <div className="top--infos">
            <strong>Song title {rank}</strong>
            <span>Artist name {rank}</span>
        </div>
    </TopItemWrapper>

}

export default memo(TopItem);
