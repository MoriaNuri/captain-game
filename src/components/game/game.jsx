import React from 'react';
import GameBoard from '../gameBoard/gameBoard';
import SidePanel from '../sidePanel/sidePanel';
import './game.css';
// import { Howl, Howler } from 'howler';
// import music from '../../assets/sounds/sound.mp3';

const GameContainer = props => {
// const sound = new Howl({
//     src: [music],
//     loop: true,
//   });
//   sound.play();
//   Howler.volume(0.3);

    return (
        <div className="game-container">
            <GameBoard/>
            <SidePanel/>
        </div>
    )

}

export default GameContainer;