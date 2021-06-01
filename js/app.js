import { Block } from "./block.js";

class App {

  constructor() {
    this.BLOCKSIZE = 40;
    this.ROWS = 10;
    this.COLUMNS = 20;
    this.KEY = {
      down: 40,
      right: 39,
      left: 37,
      space: 32
    }
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.canvas.width = this.BLOCKSIZE * this.ROWS;
    this.ctx.canvas.height = this.BLOCKSIZE * this.COLUMNS;
    this.ctx.scale(this.BLOCKSIZE, this.BLOCKSIZE);
    document.body.appendChild(this.canvas);
    this.matrics = this.createMatrics();
    this.init();
  }

  init() {
    this.eventHandler();
    this.matricsDraw();
    this.createBlock();
    this.blockDraw();
  }
  eventHandler() {
    window.addEventListener('keydown', e => {
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

    });
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
    this.ctx.fillStyle = "white";
    this.matrics.forEach((rows, y) => {
      rows.forEach((columns, x) => {
        this.ctx.fillRect(x, y, 0.99, 0.99);
      });
    });
  }

  createBlock() {
    this.block = new Block().getMINO();
  }

  blockDraw() {
    this.clear();
    this.ctx.fillStyle = this.block.color;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values == 1) {
          this.ctx.fillRect(this.block.x + x, this.block.y + y, 0.98, 0.98);
        }
      });
    });
  }
  rightMove() {
    this.block.x++;
    this.validation() == true ? this.blockDraw() : this.block.x--;
  }
  leftMove() {
    this.block.x--;
    this.validation() == true ? this.blockDraw() : this.block.x++;
  }
  downMove() {
    this.block.y++;
    this.validation() == true ? this.blockDraw() : this.block.y--;
  }

  validation() {
    let isCheck = true;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values == 1) {
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

  rotate() {
    this.block.shape.forEach((rows) => {
      rows.reverse();
    });

    let array = [];
    this.block.shape.forEach(rows => {
      array.push([...rows]);
    });

    array.forEach((rows, x) => {
      rows.forEach((values, y) => {
        this.block.shape[y][x] = array[x][y];
      });
    });

    this.validation() == true ? this.blockDraw() : this.rotate();
  }

  clear() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}

window.onload = () => {
  new App();
}