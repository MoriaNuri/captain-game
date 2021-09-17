import React, {useRef, useEffect} from 'react';
import GameService from '../../services/gameService';
import './gameBoard.css';

const GameBoard = () => {

    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      console.log('ctx',ctx);
      console.log('window',window);

      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      GameService.restartGame(ctx);
     

      window.addEventListener('resize', () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      });
    }, [])//like didmount

    // function getMousePos(canvas, evt) {
    //   var rect = canvas.getBoundingClientRect();
    //   return {
    //     x: evt.clientX - rect.left,
    //     y: evt.clientY - rect.top
    //   };
    // }

    // var mousePos = getMousePos(canvas, evt);
    // var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;

    // function writeMessage(canvas, message) {
    //   var context = canvas.getContext('2d');
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   context.font = '18pt Calibri';
    //   context.fillStyle = 'black';
    //   context.fillText(message, 10, 25);
    // }
    // function getMousePos(canvas, evt) {
    //   var rect = canvas.getBoundingClientRect();
    //   return {
    //     x: evt.clientX - rect.left,
    //     y: evt.clientY - rect.top
    //   };
    // }
    // var canvas = document.getElementById('myCanvas');
    // // var context = canvas.getContext('2d');
    // canvas.addEventListener('mousemove', function(evt) {
    //   var mousePos = getMousePos(canvas, evt);
    //   var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //   writeMessage(canvas, message);
    // }, false);
 


    return (
      <section>

      
        <canvas ref={canvasRef} className="canvas" width='100%' height='100%'> </canvas>
        <div className="circle"></div>
      </section>
      
    )
}

export default GameBoard;