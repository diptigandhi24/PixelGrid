import "./style.css";
import React from "react";

interface SquareProps {
  id: number;
  updateSquareColor: (id: number) => void;
  bckgdColor: string;
}

function Square({ id, updateSquareColor, bckgdColor }: SquareProps) {
  return (
    <div
      id={id.toString()}
      style={{
        backgroundColor: bckgdColor,
      }}
      className="square"
      onClick={(event) => {
        updateSquareColor(id);
      }}
    ></div>
  );
}

const MemoizeSquare = React.memo(Square);
export default MemoizeSquare;
