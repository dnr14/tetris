export const Colors = {
  red: "#ff0101",
  indigo: "#9e7800",
  blue: "#01afed",
  yellow: "#f7e600",
  green: "#00b050",
  orange: "#fdc100",
  purple: "#6c309d",
};

export default class Block {
  constructor() {
    this.MINOS = [
      {
        //Z
        x: 3,
        y: 0,
        shape: [
          [1, 1, 0],
          [0, 1, 1],
          [0, 0, 0],
        ],
        color: Colors.red,
      },
      {
        //S
        x: 3,
        y: 0,
        shape: [
          [0, 2, 2],
          [2, 2, 0],
          [0, 0, 0],
        ],
        color: Colors.indigo,
      },
      {
        //L
        x: 3,
        y: 0,
        shape: [
          [3, 0, 0],
          [3, 0, 0],
          [3, 3, 0],
        ],
        color: Colors.blue,
      },
      {
        // J
        x: 3,
        y: 0,
        shape: [
          [0, 0, 4],
          [0, 0, 4],
          [0, 4, 4],
        ],
        color: Colors.yellow,
      },
      {
        // O
        x: 3,
        y: 0,
        shape: [
          [5, 5],
          [5, 5],
        ],
        color: Colors.green,
      },
      {
        // I
        x: 3,
        y: 0,
        shape: [
          [0, 6, 0, 0],
          [0, 6, 0, 0],
          [0, 6, 0, 0],
          [0, 6, 0, 0],
        ],
        color: Colors.orange,
      },
      {
        // T
        x: 3,
        y: 0,
        shape: [
          [0, 0, 0],
          [7, 7, 7],
          [0, 7, 0],
        ],
        color: Colors.purple,
      },
    ];
  }

  getMINO() {
    const random = Math.floor(Math.random() * 7);
    return this.MINOS[random];
  }
}
