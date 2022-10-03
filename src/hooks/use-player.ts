import { useState, useEffect } from "react";

function usePlayer(audio: React.MutableRefObject<HTMLAudioElement>) {
    const [duration, setDuration] = useState<number>();
    const [curTime, setCurTime] = useState<number>();
    const [playing, setPlaying] = useState<boolean>(false);
    const [clickedTime, setClickedTime] = useState<any>();
    const [volume, setVolume] = useState<number>(.35);
    const [muted, setMuted] = useState<boolean>(false);

    useEffect(() => {

        const setAudioData = () => {
            setDuration(audio.current?.duration);
            setCurTime(audio.current?.currentTime);
            // setVolume(audio.current?.volume);
        }

        const setAudioTime = () => setCurTime(audio.current?.currentTime);
        const setAudioVolume = (e: any) => setVolume(audio?.current?.volume);

        audio.current?.addEventListener("loadeddata", setAudioData);
        audio.current?.addEventListener("timeupdate", setAudioTime);
        audio.current?.addEventListener("volumechange", setAudioVolume);

        playing ? audio.current?.play() : audio.current?.pause();

        if(volume && volume !== audio?.current?.volume) {
            if(audio.current) {
                audio.current.volume = volume;
            }
        }

        if(muted !== audio?.current?.muted) {
            console.log(muted);
            if(audio.current) {
                audio.current.muted = muted;
            }
        }

        if (clickedTime && clickedTime !== curTime) {
            if(audio.current) {
                audio.current.currentTime = clickedTime;
            }
            setClickedTime(null);
        }

        return () => {
            audio.current?.removeEventListener("loadeddata", setAudioData);
            audio.current?.removeEventListener("timeupdate", setAudioTime);
            audio.current?.removeEventListener("volumechange", setAudioVolume);
        }
    });

    return {
        curTime,
        duration,
        playing,
        setPlaying,
        setClickedTime,
        volume,
        setVolume,
        muted,
        setMuted
    }
}

export default usePlayer;
