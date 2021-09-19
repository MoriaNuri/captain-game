import React, { Component } from 'react'
import './home.css'
import Sea from '.././../assets/imgs/sea.png'
import Pirate from '.././../assets/imgs/pirate.png'

class Home extends Component {
    constructor(props) {
        super(props);
        this.OnGame = this.OnGame.bind(this);
    }
    OnGame() {
        this.props.history.push('/game');
    }
    render() {
        return (
            <div className="home-page" style={{ backgroundImage: `url(${Sea})` }}>
                <img className="pirate" src={Pirate} alt="" />
                <h1>Captain Game</h1>
                <div className="start-container">
                    <div className="start-btn" onClick={this.OnGame}>
                        Play
                    </div>
                </div>
            </div>
        )
    }
}
export default Home