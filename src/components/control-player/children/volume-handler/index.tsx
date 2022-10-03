import React, {memo} from "react";
import styled from "styled-components";
import {MdVolumeUp} from "react-icons/all";

const VolumeHandlerWrapper = styled.div<{percent: number}>`
  display: flex;
  align-items: center;
  gap: .5rem;
  
  ._progress {
    -webkit-appearance: none; 
    appearance: none;
    width: 100px;
    height: 3px;
    background: ${({theme}) => theme.dark};
    position: relative;
    
    &:before {
      background: ${({theme}) => theme.primary};
      position: absolute;
      content: "";
      width: ${({percent}) => percent * 100}%;
      height: 3px;
    }
  }
  
  ._progress::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
    background: ${({theme}) => theme.primary};
  }

  ._progress::-moz-range-thumb {
    background: ${({theme}) => theme.primary};
    width: 13px; 
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

type VolumeHandlerProps = {
    volume: number;
    setVolume:  React.Dispatch<React.SetStateAction<number>>;
}

const VolumeHandler = ({volume, setVolume}: VolumeHandlerProps) => {

    const handleTimeDrag = (e: any) => {
        setVolume?.(e.target?.value / 100);
    }

    return <VolumeHandlerWrapper percent={volume}>
        <a>
            <MdVolumeUp size={22}/>
        </a>
        <input
            type="range"
            className={"_progress"}
            max={100}
            min={0}
            defaultValue={volume * 100}
            onChange={handleTimeDrag}
        />
    </VolumeHandlerWrapper>

}

export default memo(VolumeHandler);
