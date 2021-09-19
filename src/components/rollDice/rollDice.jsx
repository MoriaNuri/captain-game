
import React, { Component } from 'react'
import GameService from '../../services/gameService';
import UtilService from '../../services/utilService';
import './rollDice.css'
import Dice from '../dice/dice'
import Modal from '../modal/modal'
import loss from '../../assets/audio/game-over.wav'
import win from '../../assets/audio/winner.wav'

class RollDice extends Component {

  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  state = {
    dice: 'one',
    rolling: false,
    isOpen: false,
    msg: '',


  }

  constructor(props) {
    super(props)
    this.OnRoll = this.OnRoll.bind(this)
  }

  OnRoll() {
    const { sides } = this.props
    const randomSideIndex = UtilService.getRandomIntInclusive(0, 5)
    const randomSide = sides[randomSideIndex]
    this.setState({
      dice: randomSide,
      rolling: true,
    })

    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)

    let lossAudio = new Audio(loss)
    let victoryAudio = new Audio(win)

    switch (randomSide) {
      case 'one':
        GameService.movePlayer(1);
        GameService.saveLog(1, Date.now());
        this.showMsg('You stay in the same place. Game over!')
        lossAudio.play()
        break;

      case 'two':
        victoryAudio.play()
        GameService.movePlayer(2);
        let num = this.getRandomNum()
        if (num <= 0.5) {
          this.showMsg(' The rum spoiled and turned into vinegar! GameOver!!')
          GameService.saveLog(3, Date.now())
        }
        else
          this.showMsg('You Won!')
        GameService.saveLog(2, Date.now())
        break;

      case 'three':
        lossAudio.play()
        GameService.movePlayer(3);
        this.showMsg('The dragon eat you! Game Over')
        GameService.saveLog(1, Date.now())
        break;

      case 'four':
        victoryAudio.play()
        GameService.movePlayer(4);
        GameService.saveLog(2, Date.now())
        this.showMsg('You won!')
        break;

      case 'five':
        GameService.movePlayer(5);
        let sentences = GameService.getSentences();
        let number = UtilService.getRandomIntInclusive(0, sentences.length)
        let sentence = sentences[number]
        this.showMsg(sentence.description)
        break;

      case 'six':
        victoryAudio.play()
        GameService.movePlayer(6);
        this.showMsg('You won! You came to the island and survived')
        break;
    }
  }


  getRandomNum = () => {
    return (Math.random() * (2 - 1));
  }

  showMsg = (msg) => {
    this.setState({ isOpen: true, msg: msg })
  }
  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const handleBtn = this.state.rolling ?
      'RollDice-rolling' : ''
    const { dice, rolling, msg, isOpen } = this.state
    return (
      <div className='RollDice'>
        <button className={handleBtn}
          disabled={this.state.rolling || isOpen}
          onClick={this.OnRoll}>
          {this.state.rolling ? 'Rolling' : 'Roll dice'}
        </button>
        <div className='RollDice-container'>
          <Dice face={dice} rolling={rolling} />
          <Modal msg={msg} isOpen={isOpen} closeModal={this.closeModal} />
        </div>
      </div>
    )
  }
}

export default RollDice