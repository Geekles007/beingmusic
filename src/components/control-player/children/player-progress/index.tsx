import React, {memo} from "react";
import styled from "styled-components";

const PlayerProgressWrapper = styled.div<{percent?: number}>`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  min-height: 2px;
  background-color: ${({theme}) => theme.bright};
  
  ._progress {
    width: 100%;
    background: linear-gradient(to right, ${({theme}) => theme.primary} ${({percent}) => percent}%, ${({theme}) => theme.dark} 0);
    height: 3px;
    position: absolute;
    left: 0;
    background-color: ${({theme}) => theme.primary};
    transition: all .5s 0s ease-in-out;
    cursor: pointer;
    
    &--handler {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${({theme}) => theme.primary};
      position: absolute;
      left: ${({percent}) => ((percent ?? 0) - .75)}%;
      top: -6.5px;
      cursor: pointer;
    }
  }
`;

type PlayerProgressProps = {
    duration?: number;
    currentTime?: number;
    onTimeUpdate?: (value: number) => void;
}

const PlayerProgress = ({duration, currentTime, onTimeUpdate}: PlayerProgressProps) => {

    const percent = ((currentTime ?? 0) / (duration ?? 0)) * 100;

    const calcClickedTime = (e: any) => {
        const clickPositionInPage = e.pageX;
        const bar: any = document.querySelector("._progress");
        const barStart = (bar?.getBoundingClientRect()?.left ?? 0) + window.scrollX;
        const barWidth = bar?.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = (duration ?? 0) / barWidth;
        return timePerPixel * clickPositionInBar;
    }

    const handleTimeDrag = (e: any) => {
        onTimeUpdate?.(calcClickedTime(e));

        const updateTimeOnMove = (eMove: any) => {
            onTimeUpdate?.(calcClickedTime(eMove));
        };

        document.addEventListener("mousemove", updateTimeOnMove);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", updateTimeOnMove);
        });
    }

    return <PlayerProgressWrapper percent={percent}>
        <div className="_progress" onMouseDown={handleTimeDrag}>
            <div className="_progress--handler" />
        </div>
    </PlayerProgressWrapper>

}

export default memo(PlayerProgress);
