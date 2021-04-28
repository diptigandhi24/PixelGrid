import React, { useState } from "react";
import { randomColorHex } from "./util";
import MemoizeSquare from "./square";
import getBoxNeighbor from "./getBoxNeighbor";

export default function GridApp() {
  //
  let gridHeight = parseInt(`${window.innerHeight / 80}`);
  let gridWidth = parseInt(`${window.innerWidth / 80}`);
  let initialState = Array.from(
    new Array(gridWidth * gridHeight).fill(null).map(() => randomColorHex())
  );

  const [grid, updateGrid] = useState(initialState);

  function updateSquareColor(squareId: number) {
    let neighbour = getBoxNeighbor(squareId, gridWidth, gridHeight);

    updateGrid((prevGrid) => {
      console.log("Before", prevGrid[squareId], prevGrid[neighbour]);
      let temp = [...prevGrid];
      temp[squareId] = randomColorHex();
      temp[neighbour] = randomColorHex();
      console.log("After", temp[squareId], temp[neighbour]);
      return temp;
    });
  }

  return (
    <>
      <div className="boxWrapper">
        {grid.map((color, index) => {
          return (
            <MemoizeSquare
              key={index.toString()}
              id={index}
              updateSquareColor={updateSquareColor}
              bckgdColor={color}
            />
          );
        })}
      </div>
    </>
  );
}
