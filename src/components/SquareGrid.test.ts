import getBoxNeighbor from "./getBoxNeighbor";

test("Find the next id, given one id", () => {
  expect(getBoxNeighbor(4, 3, 3)).toBe(5);
});
test("Find the left neighbour when it exists", () => {
  expect(getBoxNeighbor(5, 3, 3)).toBe(4);
});
test("Find the top neighbour", () => {
  expect(getBoxNeighbor(2, 1, 3)).toBe(1);
});

// test("Find the bottom neighbour", () => {
//   expect(getBoxNeighbor(1, 1, 3)).toBe(2);
// });
