import React from "react"
import "./player.scss"
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';


const Player = ({audioElem, isplaying, setisplaying, currentSong})=> {

  const PlayPause = () => {
    setisplaying(!isplaying);
  }
  return (
  <div className="player_container">
    <div className="title">
      <p>{currentSong.name}</p>
    </div>
    <div className="navigation">
      <div className="navigation_wrapper">
        <div className="seek_bar" style={{width:'50%'}}></div>
      </div>
    </div>
    <div className="controls">
      <BsFillSkipStartCircleFill className='btn_action' />
      {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} />
      : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause} />}
      <BsFillSkipEndCircleFill className='btn_action' />
    </div>
  </div>
  )

}


export default Player;