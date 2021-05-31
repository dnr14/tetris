export class Bloc {
  constructor() {
    this.MINOS = ["Z", "S", "L", "I", "O", "T", "J"];
    this.index = 0;
    this.prevIndex = 0;
    this.position = this.getPosition();
    this.x = 3;
    this.y = 0;
    this.color;
  }

  getPosition() {
    let MINO = this.MINOS[Math.floor(Math.random() * 7)];
    this.mino = MINO;
    switch (MINO) {
      case "Z":
        MINO = [
          [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
          ],
          [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0]
          ]
        ];
        break;
      case "S":
        MINO = [
          [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
          ],
          [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
          ]
        ]

        break;
      case "L":
        MINO = [
          [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0]
          ],
          [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
          ],
          [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
          ]
        ]
        break;
      case "I":
        MINO = [
          [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
          ],
          [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
          ]
        ]
        break;
      case "O":
        MINO = [
          [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
          ]
        ]
        break;
      case "T":
        MINO = [
          [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
          ],
          [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
          ],
          [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
          ],
          [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0]
          ]
        ]
        break;
      case "J":
        MINO = [
          [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
          ],
          [
            [0, 0, 0],
            [1, 0, 0],
            [1, 1, 1]
          ],
          [
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 0]
          ]
        ]
        break;
    }

    return MINO;
  }

  currentPosition() {
    return this.position[this.getIndex()];
  }
  nextPosition() {
    this.index++;
    if (this.position.length == this.index) {
      this.index = 0;
    }
    this.prevIndex = this.index;
    return this.position[this.getIndex()];
  }
  prevPosition() {
    return this.position[this.getPrevIndex()];
  }
  getIndex() {
    return this.index;
  }
  getPrevIndex() {
    return this.prevIndex;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  rigtX() {
    this.x++;
  }
  leftX() {
    this.x--;
  }
  downY() {
    this.y++;
  }


}
