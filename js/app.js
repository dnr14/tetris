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
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.REMOVE_COLOR = "white";
    this.CURRENT_COLOR = "black";
    this.init();
  }
  init() {
    this.setCanasW();
    this.setCanasH();
    this.eventHandler();
    this.createBloc();
    // this.timer();
  }
  setCanasW() {
    this.canvas.width = this.CULMNS * this.CELL;
  }
  setCanasH() {
    this.canvas.height = this.ROWS * this.CELL;
  }

  createBloc() {
    this.bloc = new Bloc();
    this.draw(this.bloc.nextPosition(), this.CURRENT_COLOR, this.bloc.getX(), this.bloc.getY());
  }

  eventHandler() {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case this.KEY.down:
          this.draw(this.bloc.prevPosition(), this.REMOVE_COLOR, this.bloc.getX(), this.bloc.getY());
          this.draw(this.bloc.nextPosition(), this.CURRENT_COLOR, this.bloc.getX(), this.bloc.getY());
          break;
        case this.KEY.left:
          this.bloc.leftX();
          this.draw(this.bloc.currentPosition(), this.REMOVE_COLOR, this.bloc.getX() + 1, this.bloc.getY());
          this.draw(this.bloc.currentPosition(), this.CURRENT_COLOR, this.bloc.getX(), this.bloc.getY());
          break;
        case this.KEY.right:
          this.bloc.rigtX();
          this.draw(this.bloc.currentPosition(), this.REMOVE_COLOR, this.bloc.getX() - 1, this.bloc.getY());
          this.draw(this.bloc.currentPosition(), this.CURRENT_COLOR, this.bloc.getX(), this.bloc.getY());
          break;
      }
    });
  }

  draw(array, color, startX, startY) {
    let y = startY;
    if (array instanceof Array) {
      array.forEach(row => {
        let x = startX;
        row.forEach(culomn => {
          if (culomn == 1) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(this.CELL * x, this.CELL * y, this.CELL, this.CELL);
          }
          x++;
        });
        y++;
      });
    }
  }
  timer() {
    setInterval(() => {
      this.bloc.downY();
      this.draw(this.bloc.currentPosition(), this.REMOVE_COLOR, this.bloc.getX(), this.bloc.getY() - 1);
      this.draw(this.bloc.currentPosition(), this.CURRENT_COLOR, this.bloc.getX(), this.bloc.getY());
    }, 1000);
  }
}

new App();