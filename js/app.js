import { Bloc } from "./bloc.js";

class App {
  constructor() {
    this.ROWS = 20;
    this.CULMNS = 10;
    this.CELL = 30;
    this.KEY = {
      down: "ArrowDown",
      right: "ArrowRight",
      left: "ArrowLeft"
    };
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "red";
    document.body.appendChild(this.canvas);
    this.init();
    this.eventHandler();
  }
  init() {
    this.setCanasW();
    this.setCanasH();
    // this.startDraw();
  }
  setCanasW() {
    this.canvas.width = this.CULMNS * this.CELL;
  }
  setCanasH() {
    this.canvas.height = this.ROWS * this.CELL;
  }

  eventHandler() {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case this.KEY.down:
          break;
        case this.KEY.left:
          break;
          case this.KEY.right:
          this.clearDraw(this.Z_MINO.array[this.Z_MINO.beforIndex]);
          this.startDraw(this.Z_MINO.array[this.Z_MINO.index]);
          this.getZ_MINO();
          break;
      }
    });
  }

  
  // startDraw(array) {
  //   let index = 0;
  //   if (array instanceof Array) {
  //     array.forEach(x => {
  //       let startX = 3;
  //       x.forEach(y => {
  //         if (y == 1) { this.ctx.fillStyle ="black";
  //           this.ctx.fillRect(startX * this.CELL, index * this.CELL, this.CELL, this.CELL);
  //         }
  //         startX++;
  //       });
  //       index++;
  //     });
  //   }
  // }
  // clearDraw(array) {
  //   let index = 0;
  //   if (array instanceof Array) {
  //     array.forEach(x => {
  //       let startX = 3;
  //       x.forEach(y => {
  //         if (y == 1) {
  //           this.ctx.fillStyle ="white";
  //           this.ctx.fillRect(startX * this.CELL, index * this.CELL, this.CELL, this.CELL);
  //         }
  //         startX++;
  //       });
  //       index++;
  //     });
  //   }
  // }
}

new App();