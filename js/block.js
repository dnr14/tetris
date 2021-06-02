export class Block {
  constructor() {
    this.MINOS = [
      {//Z
        x: 3,
        y: 0,
        shape: [
          [1, 1, 0],
          [0, 1, 1],
          [0, 0, 0],
        ],
        color: "red"
      },
      {//s
        x: 3,
        y: 0,
        shape: [
          [0, 2, 2],
          [2, 2, 0],
          [0, 0, 0],
        ],
        color: "indigo"
      },
      {//L
        x: 3,
        y: 0,
        shape: [
          [3, 0, 0],
          [3, 0, 0],
          [3, 3, 0],
        ],
        color: "blue"
      },
      {// J
        x: 3,
        y: 0,
        shape: [
          [0, 0, 4],
          [0, 0, 4],
          [0, 4, 4],
        ],
        color: "yellow"
      },
      {// o
        x: 3,
        y: 0,
        shape: [
          [0, 0, 0],
          [0, 5, 5],
          [0, 5, 5],
        ],
        color: "green"
      },
      {// I
        x: 3,
        y: 0,
        shape: [
          [0, 6, 0, 0],
          [0, 6, 0, 0],
          [0, 6, 0, 0],
          [0, 6, 0, 0]
        ],
        color: "orange"
      },
      {// I
        x: 3,
        y: 0,
        shape: [
          [0, 0, 0],
          [7, 7, 7],
          [0, 7, 0]
        ],
        color: "purple"
      }
    ];
  }

  getMINO() {
    let random = Math.floor(Math.random() * 7);
    return this.MINOS[random];
  }
}