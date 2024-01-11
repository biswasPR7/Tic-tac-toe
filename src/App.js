import React, { useState } from "react";
import Board from "./components/board" ;
 

function App(){

    const WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    
    const [moves,updateMoves] = useState(Array(9).fill(null));
    const [Xplaying,setXplaying]= useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [count,updateCount]= useState(0);
    const [champ,setChamp] = useState(null);
    function handle_click(idx){
      
       let arr = moves.map((e,i)=>{
        if(i===idx&&e==null){return Xplaying ? "x" : "o"}
        else{return e}
       })
       
    setXplaying(!Xplaying);
       
       

     updateMoves(arr);
    

     checkWinner(arr);
      

     function checkWinner(board) {
        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
          const [x, y, z] = WIN_CONDITIONS[i];
    
          
          if (board[x] && board[x] === board[y] && board[y] === board[z]) {
            setGameOver(true);
             setChamp(board[x]);
             return;
            
          }
          
        }

        if(count===8){setChamp("draw");setGameOver(true);}
          else{return ; }
      }

      updateCount(count+1);



    }

    function reset(){
        updateMoves(Array(9).fill(null))
        setXplaying(true)
        setGameOver(false)
        updateCount(0)
    }

    
    return (
       <div className="screen">
        <div className="heading">Tic tac toe</div>
        <Board board = {moves} reset_click={reset} got_clicked={gameOver ? reset : handle_click}/>
        {gameOver && (champ === "draw" ? <div className="result"> Draw 😑</div > : <div className="result">{champ}  won 🤘!!!</div>)} 
       </div>
     

    )
}

export default App;