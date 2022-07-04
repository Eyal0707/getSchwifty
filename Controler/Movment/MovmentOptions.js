export default [
  {
    column: (column) => column + 1,
    row: (row) => row,
  },
  {
    column: (column) => column - 1,
    row: (row) => row,
  },
  {
    column: (column) => column,
    row: (row) => row + 1,
  },
  {
    column: (column) => column,
    row: (row) => row - 1,
  },
];
