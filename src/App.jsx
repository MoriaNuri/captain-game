import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/home';
import Game from './components/game/game';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/game" component={Game}></Route>
    </Router>
  )
}

export default App