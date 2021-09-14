import React, { Component } from 'react'
import './home.css'
import Sea from '.././../assets/imgs/sea.png'
import Pirate from '.././../assets/imgs/pirate.png'
// import Island from '.././../assets/imgs/island1.png'



class Home extends Component {
    render() {
        return (
            <div className="home-page" style={{ backgroundImage: `url(${Sea})` }}>
                <h1 >תפוס את האוצר</h1>
                <img className="pirate" src={Pirate} alt="" />
                {/* <img className="island" src={Island} alt="" /> */}
                <div className="start-container">
                    <div className="start-btn">Start</div>
                </div>
            </div>
            //      <div style={{ backgroundImage: `url(${background})` }}>
            //      Hello World
            //    </div>
        )
    }
}
export default Home