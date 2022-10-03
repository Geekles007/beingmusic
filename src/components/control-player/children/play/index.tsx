import React, {memo, useCallback, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {FaPause, FaPlay} from "react-icons/fa";
import {theme} from "../../../../theme";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(.7);
  }

  100% {
    transform: scale(1);
  }
`;

const PlayAndPauseButtonWrapper = styled.button<{isPlaying: boolean}>`

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  
  ._content{
    background-color: ${({theme}) => theme.primary};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    z-index: 2;
  }
  
  &:before {
    display: block;
    content: "";
    background-color: ${({theme}) => theme.primary};
    opacity: .4;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    
    position: absolute;
    z-index: 1;
    
    ${({isPlaying}) => {
        return isPlaying ? css`animation: ${pulse} 1s linear infinite` : null;
    }}
  }
`;

type PlayAndPauseButtonProps = {
    playing: boolean;
    setPlaying:  React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayAndPauseButton = ({playing, setPlaying}: PlayAndPauseButtonProps) => {

    const playChanger = useCallback(() => {
        setPlaying(old => !old);
    }, [setPlaying])

    return <PlayAndPauseButtonWrapper onClick={playChanger} isPlaying={playing}>
        <div className="_content">
            {
                !playing ?
                    <FaPlay size={12} color={theme.white} className={"button--icon"} /> :
                    <FaPause size={12} color={theme.white} className={"button--icon"} />
            }
        </div>
    </PlayAndPauseButtonWrapper>

}

export default memo(PlayAndPauseButton);
