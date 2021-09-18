import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
// , Switch
// import Pirate from '../src/assets/imgs/pirate.png';

import Home from './components/home/home';
import Game from './components/game/game';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {

  // return <LoginPage />
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#" ></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item"  href="#"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/game">Game</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
          </ul>
          </div>
      </nav>
        {/* <Switch> */}

    <Route path="/" exact component={Home}></Route>
    <Route path="/game"  component={Game}></Route>
    <Route path="/login"  component={Login}></Route>
    <Route path="/signup"  component={Signup}></Route>
        {/* </Switch> */}
    

      {/* <Switch> */}
        {/* <Route exact path='/'>
        <Login />
      </Route> */}
        {/* <Route path='/game'>
          <Game />
        </Route> */}


      {/* </Switch> */}
    </Router>
  )
}

export default App