import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Player from "./Player/Player";
import { songsdata } from "./Player/audios";

const App = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const audioElem = useRef();

  useEffect(() => {
    if(isplaying){
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);


  useEffect(() => {
    audioElem.current.src = currentSong.url;
}, [currentSong])



  return (
    <div className="App">
      <audio src={currentSong.url} ref={audioElem} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong = {currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
