import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Player from "./Player/Player";

const App = () => {
  const [songs, setSongs] = useState(null);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState([]);
  const audioElem = useRef();

  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/sound/songs")

      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSongs(data);
        setCurrentSong(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  useEffect(() => {
    audioElem.current.src = "https://assets.breatheco.de/apis/sound/" + currentSong.url;

  }, [currentSong]);

  return (
    <div className="App">
      <audio src={currentSong.url} ref={audioElem} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
