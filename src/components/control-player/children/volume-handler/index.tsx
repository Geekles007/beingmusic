import React, {memo, useCallback, useEffect} from "react";
import styled from "styled-components";
import {MdVolumeMute, MdVolumeOff, MdVolumeUp} from "react-icons/all";

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
    muted: boolean;
    setVolume:  React.Dispatch<React.SetStateAction<number>>;
    setMuted:  React.Dispatch<React.SetStateAction<boolean>>;
}

const VolumeHandler = ({volume, setVolume, setMuted, muted}: VolumeHandlerProps) => {

    const handleTimeDrag = useCallback((e: any) => {
        setVolume?.(e.target?.value / 100);
    }, []);

    const handleMuted = useCallback(() => {
        setMuted((muted) => !muted);
    }, []);

    return <VolumeHandlerWrapper percent={volume}>
        <a onClick={handleMuted}>
            {
                muted ? <MdVolumeOff size={22}/> : <MdVolumeUp size={22}/>
            }
        </a>
        <input
            type="range"
            id={"volume-range"}
            className={"_progress"}
            max={100}
            disabled={muted}
            min={0}
            defaultValue={muted ? 0 : volume * 100}
            onChange={handleTimeDrag}
        />
    </VolumeHandlerWrapper>

}

export default memo(VolumeHandler);
