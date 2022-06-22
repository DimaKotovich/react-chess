import React, { FC, useState } from 'react';
import CellComponent from '../CellComponent/CellComponent';
import {Board} from '../models/Board';
import { Cell } from '../models/Cell';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function clickFigure(cell: Cell) {
    setSelectedCell(cell);
    console.log(cell);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
          {row.map(cell =>
            <CellComponent
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.x}
              click={clickFigure} 
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default BoardComponent;