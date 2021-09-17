
import React, { Component } from 'react'
import GameService from '../../services/gameService';
import UtilService from '../../services/utilService';
import './rollDice.css'
import Die from '../die/die'
import Modal from '../modal/modal'

class RollDice extends Component {

  

  static defaultProps = {
    sides: ['one', 'two', 'three',
      'four', 'five', 'six']
  }

  constructor(props) {
    super(props)

    this.state = {
      die1: 'one',
      rolling: false,
      isOpen: false,
      msg: ''
    }
    this.OnRoll = this.OnRoll.bind(this)
  }

  OnRoll() {
    const { sides } = this.props
    this.setState({
      // Changing state upon click
      die1: sides[Math.floor(Math.random() * sides.length)],
      rolling: true
    })

    // Start timer of one sec when rolling start
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)

    console.log('state', this.state.die1);

    switch (this.state.die1) {
      case 'one':
        GameService.roll(1);
        this.gameOver()
        break;
      case 'two':
        GameService.roll(2);
        let num = this.getRandomNum()
        console.log(num);
        if (num <= 0.5) {
          setTimeout(() => {
            this.setState({ isOpen: true, msg: ' The rum spoiled and turned into vinegar! GameOver!!' })
          }, 3)
        }
        else setTimeout(() => {
          this.win()
        }, 3)

        break;
      case 'three':
        GameService.roll(3);
        this.gameOver()

        break;
      case 'four':
        GameService.roll(4);
        break;
      case 'five':
        GameService.roll(5);
        let sentences=GameService.getSentences();
       let number= UtilService.getRandomArbitrary(0,sentences.length-1)
       let sentence=sentences[number]
       this.showMsg(sentence.description)



        break;
      case 'six':
        GameService.roll(6);
        break;
      default: console.log(this.state.die1);;
    }
  }


  getRandomNum = () => {
    return (Math.random() * (2 - 1));
  }
  gameOver=()=>{

      this.setState({ isOpen: true, msg: 'GameOver' })

    console.log(this.state.isOpen);
  }
  win=()=>{
    setTimeout(() => {
      this.setState({ isOpen: true, msg: 'You Win!!' })
    }, 10)
  }
  showMsg=(msg)=>{
    setTimeout(() => {
      this.setState({ isOpen: true, msg: msg })
    }, 10)
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
    console.log(this.state.isOpen);
  };

  render() {
    const handleBtn = this.state.rolling ?
      'RollDice-rolling' : ''
    const { die1, rolling, msg, isOpen } = this.state
    return (
      <div className='RollDice'>
        <button  className={handleBtn}
          disabled={this.state.rolling || isOpen }
          onClick={this.OnRoll}>
          {this.state.rolling ? 'Rolling' : 'Roll dice'}
        </button>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
          <Modal msg={msg} isOpen={isOpen} closeModal={this.closeModal} />
        </div>
      </div>
    )
  }
}

export default RollDice