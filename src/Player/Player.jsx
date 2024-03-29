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

  const [volume, setVolume] = React.useState(0.5);


  const playSong = (song) => {
    setCurrentSong(song);
    setisplaying(false);
  };

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const skipBack = () => {
    const index = songs.findIndex(x => x == currentSong);

    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1])
    }
    setisplaying(false);
  };

  const skipToNext = () => {
    const index = songs.findIndex(x => x === currentSong);
      const nextIndex = (index + 1) % songs.length;
      setCurrentSong(songs[nextIndex])
      setisplaying(false);



  };

  const  handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioElem.current.volume = e.target.value;
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
      <input 
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume_slider"
        />
      <div className="song_list">
        {songs && songs.map((song, index) =>(
          <div key={index} className="song_item" onClick={() => playSong(song)}>
            {song.name}
        </div>
        ))}
    </div>
    </div>
  );
};

export default Player;
