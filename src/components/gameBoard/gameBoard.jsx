import React, {useRef, useEffect} from 'react';
import GameService from '../../services/gameService';
import './gameBoard.css';

const GameBoard = () => {

    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      GameService.restartGame(ctx);

      window.addEventListener('resize', () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      });
    }, [])

    return (
      <section>
        <canvas ref={canvasRef} className="canvas" width='100%' height='100%'> </canvas>
        <div className="circle"></div>
      </section>
    )
}

export default GameBoard;