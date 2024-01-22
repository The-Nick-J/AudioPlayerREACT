import React from "react";
import "./player.css";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {


  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const skipBack = () => {
    const index = songs.findIndex(x => x.name == currentSong.name);

    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1])
    }
    setisplaying(false);
  };

  const skipToNext = () => {
    const index = songs.findIndex(x => x.name == currentSong.name);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1])
    }

    setisplaying(false);

  };

  return (
    <div className="player_container">
      <div className="title">
        <p>{currentSong.name}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper">
          <div className="seek_bar" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill className="btn_action" onClick={skipBack} />
        {isplaying ? (
          <BsFillPauseCircleFill
            className="btn_action pp"
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill className="btn_action pp" onClick={PlayPause} />
        )}
        <BsFillSkipEndCircleFill className="btn_action" onClick={skipToNext}/>
      </div>
    </div>
  );
};

export default Player;
