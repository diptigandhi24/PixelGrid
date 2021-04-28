export default function getBoxNeighbor(
  id: number,
  itemsPerRow: number,
  totalCol: number
): number {
  // If the number exists, send it, else send false so it will check the next function
  // A value is always guaranteed as long as there are at least 2 items per row or 2 columns

  return (
    checkLeft(id, itemsPerRow, totalCol) ??
    checkRight(id, itemsPerRow, totalCol) ??
    checkUp(id, itemsPerRow, totalCol) ??
    checkDown(id, itemsPerRow, totalCol) ??
    -1
  );
}

function checkLeft(
  id: number,
  itemsPerRow: number,
  totalNumberOfColumns: number
): number | undefined {
  if (id % itemsPerRow > 1) {
    return id - 1;
  } else {
    return undefined;
  }
}

function checkRight(
  id: number,
  itemsPerRow: number,
  totalNumberOfColumns: number
): number | undefined {
  if (id % itemsPerRow !== 0) {
    return id + 1;
  } else {
    return undefined;
  }
}

function checkUp(
  id: number,
  itemsPerRow: number,
  totalNumberOfColumns: number
): number | undefined {
  if (id - itemsPerRow >= 0) {
    return id - itemsPerRow;
  } else {
    return undefined;
  }
}

function checkDown(
  id: number,
  itemsPerRow: number,
  totalNumberOfColumns: number
): number | undefined {
  if (id + itemsPerRow <= itemsPerRow * totalNumberOfColumns) {
    return id + itemsPerRow;
  } else {
    return undefined;
  }
}
