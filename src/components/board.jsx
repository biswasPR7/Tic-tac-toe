import React from "react";
import Box from "./box";

function Board({ board, got_clicked,reset_click }) {
  return (
    <div>
      <div className="board">
        {board.map((e, i) => {
          return <Box value={e} trigger_click={() => got_clicked(i)} />;
        })}
      </div>
      
        <button className="reset" onClick={reset_click}>reset</button>
      
    </div>
  );
}

export default Board;
