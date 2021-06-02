import { Block } from "./block.js";

class App {

  constructor(btn) {
    this.color = ["red", "indigo", "blue", "yellow", "green", "orange", "purple"];
    this.BLOCKSIZE = 40;
    this.ROWS = 10;
    this.COLUMNS = 20;
    this.KEY = {
      down: 40,
      right: 39,
      left: 37,
      space: 32
    }
    this.btn = btn;
    this.btn.addEventListener('click', this.start.bind(this));
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.canvas.width = this.BLOCKSIZE * this.ROWS;
    this.ctx.canvas.height = this.BLOCKSIZE * this.COLUMNS;
    this.ctx.scale(this.BLOCKSIZE, this.BLOCKSIZE);
    document.querySelector("#root").appendChild(this.canvas);
    this.gameStart = false;
    this.matrics = this.createMatrics();
  }

  start() {
    if (!this.gameStart) {
      this.gameStart = !this.gameStart;
      this.eventHandler();
      this.matricsDraw();
      this.createBlock();
      this.timer();
    }
  }

  eventHandler() {
    this.event = (e) => {
      switch (e.keyCode) {
        case this.KEY.space:
          this.rotate();
          break;
        case this.KEY.left:
          this.leftMove();
          break;
        case this.KEY.right:
          this.rightMove();
          break;
        case this.KEY.down:
          this.downMove();
          break;
      }
    };

    window.addEventListener('keydown', this.event);
  }

  createMatrics() {
    let array1 = [];
    for (let y = 0; y < this.COLUMNS; ++y) {
      let array2 = [];
      for (let x = 0; x < this.ROWS; ++x) {
        array2.push(0);
      }
      array1.push(array2);
    }
    return array1;
  }

  matricsDraw() {
    this.matrics.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values != 0) {
          this.ctx.fillStyle = this.color[values - 1];
          this.ctx.fillRect(x, y, 0.95, 0.95);
        } else {
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  createBlock() {
    this.block = new Block().getMINO();
    this.blockDraw();
  }

  blockDraw() {
    this.matricsDraw();
    this.ctx.fillStyle = this.block.color;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values > 0) {
          this.ctx.fillRect(this.block.x + x, this.block.y + y, 0.98, 0.98);
        }
      });
    });
  }

  rightMove() {
    this.block.x++;
    if (this.blockCheck() && this.validation()) {
      this.blockDraw();
    } else {
      this.block.x--;
    }
  }

  leftMove() {
    this.block.x--;
    if (this.blockCheck() && this.validation()) {
      this.blockDraw();
    } else {
      this.block.x++;
    }
  }

  downMove() {
    this.block.y++;
    let check = this.validation() && this.blockCheck();
    if (check) {
      this.blockDraw();
    } else {
      this.block.y--;
      this.matricsValueSave();
      if (!this.gameOver()) {
        this.createBlock();
      }
    }
  }

  matricsValueSave() {
    this.block.shape.forEach((rows, dy) => {
      rows.forEach((values, dx) => {
        if (values > 0) {
          this.matrics[dy + this.block.y][dx + this.block.x] = values;
        }
      });
    });
    // this.matricsDraw();
    this.matricsFullCheck();
  }

  validation() {
    let isCheck = true;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values > 0) {
          if (this.block.x + x == this.ROWS
            || this.block.y + y == this.COLUMNS
            || this.block.x + x < 0) {
            isCheck = false;
          }
        }
      });
    });
    return isCheck;
  }

  blockCheck() {
    let isCheck = true;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values > 0) {
          let value = this.matrics[this.block.y + y][this.block.x + x];
          if (value != 0) {
            isCheck = false;
          }
        }
      });
    });
    return isCheck;
  }

  rotate() {
    if (this.block.shape.length !== 4) {
      this.block.shape.forEach((rows) => {
        rows.reverse();
      });
    }

    let array = [];
    this.block.shape.forEach(rows => {
      array.push([...rows]);
    });

    array.forEach((rows, x) => {
      rows.forEach((values, y) => {
        this.block.shape[y][x] = array[x][y];
      });
    });

    if (this.blockCheck() && this.validation()) {
      this.blockDraw();
    } else {
      this.rotate();
    }
  }

  matricsFullCheck() {
    let num = [];
    for (let y = this.COLUMNS - 1; y >= 0; --y) {
      let istrue = this.matrics[y].every(x => {
        return x > 0;
      });
      if (istrue == true) {
        num.push(y);
        this.matrics.splice(y, 1);
      }
    }
    if (num.length != 0) {
      num.forEach(x => {
        this.matrics.unshift(Array(this.ROWS).fill(0));

      });
    }
  }
  gameOver() {
    let over = this.matrics[0].some(x => {
      return x > 0;
    });

    if (over == true) {
      document.querySelector(".gameover").style.display = "flex";
      this.eventRemove();
    }
    return over;
  }

  eventRemove() {
    window.removeEventListener('keydown', this.event);
  }

  timer() {
    const timer = setInterval(() => {
      this.downMove();
    }, 500);
  }
}

const button = document.querySelector(".start");
const app = new App(button);