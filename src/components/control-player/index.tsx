import React, {memo, useRef} from "react";
import styled from "styled-components";
import {TTheme} from "../../theme";
import PlayerProgress from "./children/player-progress";
import SongInfos from "./children/song-infos";
import Controls from "./children/controls";
import PlayListButton from "./children/playlist";
import VolumeHandler from "./children/volume-handler";

import dancenow from "./../../assets/songs/JID-dancenow.mp3";
import usePlayer from "../../hooks/use-player";

const ControlPlayerWrapper = styled.div`
  position: relative;
  height: ${({theme: {controlPanelHeight}}: { theme: TTheme }) => controlPanelHeight}px;
  background-color: ${({theme}) => theme.secondary};
  padding: 0 .5rem;
  padding-top: 2px;
  display: flex;
  align-items: center;
  
  ._controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    a {
      transition: all .5s 0s ease-in-out;
      display: flex;
      align-items: center;
    }

    a:hover {
      color: ${({theme}) => theme.primary};
    }
    
    ._additionals {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

type ControlPlayerProps = {}

const ControlPlayer = ({}: ControlPlayerProps) => {

    const audio = useRef<any>();
    const { curTime, duration, playing, setPlaying, setClickedTime, volume, setVolume } = usePlayer(audio);

    return <ControlPlayerWrapper>
        <audio ref={audio} id="audio">
            <source src={dancenow} />
            Your browser does not support the <code>audio</code> element.
        </audio>
        <PlayerProgress currentTime={curTime} duration={duration} onTimeUpdate={(time: any) => setClickedTime(time)} />
        <div className="_controls">
            <SongInfos />
            <Controls setPlaying={setPlaying} playing={playing} />
            <div className="_additionals">
                <PlayListButton />
                <VolumeHandler volume={volume} setVolume={setVolume} />
            </div>
        </div>
    </ControlPlayerWrapper>

}

export default memo(ControlPlayer);
