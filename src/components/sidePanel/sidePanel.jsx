
import React from 'react';
import './sidePanel.css'
// import GameService from '../../services/gameService';
import RollDice from '../rollDice/rollDice'
// import Modal from '../modal/modal'
// import Cube from '../../assets/imgs/cube.png'
// import Circle from '../../assets/imgs/circle.png'
// import Hand from '../../assets/imgs/hand.png'

const SidePanel = props => {
  // function onRoll() {
  //   GameService.roll();
  // }

  return (
    <div className="gameSidePanel">
      {/* <div className="circle-container"> <img classNmae="circle" src={Circle} alt="" /></div>
        <div className="hand-container"> <img className="hand" src={Hand} alt="" /></div> */}
      {/* <button className="roll-button" onClick={onRoll}>Roll dice</button> */}
      {/* <img className="cube" src={Cube} alt="" /> */}
      <RollDice  />
      {/* <Modal/> */}


    


    </div>
  )
}

export default SidePanel;