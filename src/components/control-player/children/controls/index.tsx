import React, {memo} from "react";
import styled from "styled-components";
import PlayAndPauseButton from "../play";
import NextButton from "../next";
import PreviousButton from "../previous";
import RepeatButton from "../repeat";
import ShuffleButton from "../shuffle";

const ControlsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 250px;
  height: 50px;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  align-self: center;
  transform: translateX(-50%);
  left: 50%;
  
  
`;

type ControlsProps = {
    playing: boolean;
    setPlaying:  React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls = ({playing, setPlaying}: ControlsProps) => {

    return <ControlsWrapper>
        <ShuffleButton />
        <PreviousButton />
        <PlayAndPauseButton setPlaying={setPlaying} playing={playing}/>
        <NextButton />
        <RepeatButton />
    </ControlsWrapper>

}

export default memo(Controls);
