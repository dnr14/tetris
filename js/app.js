import Block from "./block.js";

class App {
  constructor() {
    this.color = [
      "red",
      "indigo",
      "blue",
      "yellow",
      "green",
      "orange",
      "purple",
    ];
    this.BLOCKSIZE = 30;
    this.COLUMNS = 25;
    this.ROWS = 15;
    this.KEY = {
      down: 40,
      right: 39,
      left: 37,
      space: 32,
    };
    this.btn = document.querySelector(".start");
    this.btn.addEventListener("click", this.start.bind(this));
    this.canvas = document.createElement("canvas");
    this.nextCanvas = document.querySelector(".nextblock canvas");
    this.$score = document.querySelector(".score");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.canvas.width = this.BLOCKSIZE * this.ROWS;
    this.ctx.canvas.height = this.BLOCKSIZE * this.COLUMNS;
    this.ctx.scale(this.BLOCKSIZE, this.BLOCKSIZE);
    this.CTX_BACKGROUND_COLOR = "white";
    this.score = 0;

    this.nextCtx = this.nextCanvas.getContext("2d");
    this.nextCtx.scale(this.BLOCKSIZE, this.BLOCKSIZE);

    this.gameStart = false;
    this.setElement();
  }

  setElement() {
    document.querySelector("#root").appendChild(this.canvas);
    document.querySelector(".gameover").style.width = `100%`;
  }

  // 게임 시작
  start() {
    if (!this.gameStart) {
      this.gameStart = !this.gameStart;
      this.matrics = this.createMatrics();
      this.eventHandler();
      this.matricsDraw();
      this.createBlock();
      this.timer();
    }
  }

  // 스페이스 : 블록 자리 변경
  // 아래 : 블록 한칸 이동
  // 좌우 : 블록 좌우 한칸 이동
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
    window.addEventListener("keydown", this.event);
  }

  // this.COLUMNS * this.ROWS 갯수 모든 요소 0으로 생성
  createMatrics() {
    return Array.from({ length: this.COLUMNS }, () => Array(this.ROWS).fill(0));
  }

  // 쌓여있는 블록 그리는 작업
  // 0이면 블록 없음
  // 0 이상이면 블록 있음
  matricsDraw() {
    this.canvasClear();
    this.matrics.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values != 0) {
          this.ctx.fillStyle = this.color[values - 1];
          this.ctx.fillRect(x, y, 0.9, 0.9);
        } else if (values > 0) {
          this.ctx.fillStyle = this.CTX_BACKGROUND_COLOR;
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  //첫 실행 시 블록 생성
  createBlock() {
    this.block = new Block().getMINO();
    this.nextblock = new Block().getMINO();
    this.nextblockDraw();
    this.blockDraw();
  }

  //첫 실행 이후 블록 생성
  createblockAndChange() {
    this.block = this.nextblock;
    this.nextblock = new Block().getMINO();
    this.nextblockDraw();
    this.blockDraw();
  }

  // 다음에 나올 블록 캔버스에 그리기
  nextblockDraw() {
    this.nextCanvasClear();
    this.nextblock.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        this.nextCtx.fillStyle = this.nextblock.color;
        if (values > 0) {
          this.nextCtx.fillRect(1 + x, 1 + y, 0.9, 0.9);
        }
      });
    });
  }

  // 캔버스에 그리기 전에 모두 한번 this.CTX_BACKGROUND_COLOR로 초기화
  canvasClear() {
    this.ctx.fillStyle = this.CTX_BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // 다음 블록 캔버스에 그리기 전에 모두 한번 this.CTX_BACKGROUND_COLOR로 초기화
  nextCanvasClear() {
    this.nextCtx.fillStyle = this.CTX_BACKGROUND_COLOR;
    this.nextCtx.fillRect(
      0,
      0,
      this.nextCtx.canvas.width,
      this.nextCtx.canvas.height
    );
  }

  // 현재 블록 그리기
  blockDraw() {
    this.matricsDraw();
    this.ctx.fillStyle = this.block.color;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values > 0) {
          this.ctx.fillRect(this.block.x + x, this.block.y + y, 0.9, 0.9);
        }
      });
    });
  }

  // 현재 나온 블록 오른쪽이동
  rightMove() {
    this.block.x++;
    this.blockCheck() && this.validation() ? this.blockDraw() : this.block.x--;
    // if (this.blockCheck() && this.validation()) {
    //   this.blockDraw();
    // } else {
    //   this.block.x--;
    // }
  }

  // 현재 나온 블록 왼쪽이동
  leftMove() {
    this.block.x--;
    this.blockCheck() && this.validation() ? this.blockDraw() : this.block.x++;
    // if (this.blockCheck() && this.validation()) {
    //   this.blockDraw();
    // } else {
    //   this.block.x++;
    // }
  }

  // 블록 아래로 이동
  downMove() {
    this.block.y++;
    let check = this.validation() && this.blockCheck();
    if (check) {
      this.blockDraw();
    } else {
      this.block.y--;
      this.matricsValueSave();
      if (!this.gameOver()) {
        this.createblockAndChange();
      }
    }
  }

  // 블록에 충돌 및 바닥에 도착 시 2차원배열에 값 넣기
  matricsValueSave() {
    this.block.shape.forEach((rows, dy) => {
      rows.forEach((values, dx) => {
        if (values > 0) {
          this.matrics[dy + this.block.y][dx + this.block.x] = values;
        }
      });
    });
    this.matricsFullCheck();
  }

  // 블록이 캔버스 좌우 및 바닥에 도착했는지 확인
  validation() {
    let isCheck = true;
    this.block.shape.forEach((rows, y) => {
      rows.forEach((values, x) => {
        if (values > 0) {
          if (
            this.block.x + x == this.ROWS ||
            this.block.y + y == this.COLUMNS ||
            this.block.x + x < 0
          ) {
            isCheck = false;
          }
        }
      });
    });
    return isCheck;
  }

  // 좌우 및 바닥으로 이동 했을때 다음 칸에 블록이 있는지 체크
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

  // 블록을 회전
  // 현재 모양에서 리버스 후 45도 회전
  //
  // x 0 0      0 0 x        0 0 0
  // x 0 0 ===> 0 0 x ====>  x x x
  // x x 0      0 x x        0 0 x
  rotate() {
    // I MINO는 리버스가 필요없어서 if으로 제한
    if (this.block.shape.length !== 4) {
      this.block.shape.forEach((rows) => {
        rows.reverse();
      });
    }

    let array = [];
    this.block.shape.forEach((rows) => {
      array.push([...rows]);
    });

    array.forEach((rows, x) => {
      rows.forEach((_, y) => {
        this.block.shape[y][x] = array[x][y];
      });
    });

    if (this.blockCheck() && this.validation()) {
      this.blockDraw();
    } else {
      this.rotate();
    }
  }

  // 블록이 다 채워졌는지 확인
  // 매트릭스에 0이 없으면 블록이 꽉찬걸로 확인
  // 0이 없는 배열 개수 만큼 splice로 제거 후
  // 0요소로 채운 새로운 배열 넣어준다.
  matricsFullCheck() {
    let num = [];
    for (let y = this.COLUMNS - 1; y >= 0; --y) {
      let istrue = this.matrics[y].every((x) => {
        return x > 0;
      });
      if (istrue == true) {
        num.push(y);
        this.matrics.splice(y, 1);
      }
    }
    if (num.length != 0) {
      num.forEach((x) => {
        this.matrics.unshift(Array(this.ROWS).fill(0));
      });

      this.score += num.length * 10;
      this.$score.textContent = this.score;
    }
  }

  // 매트릭트[0] 째에 블록이 있다면 게임 오버
  gameOver() {
    let over = this.matrics[0].some((x) => {
      return x > 0;
    });

    if (over == true) {
      document.querySelector(".gameover").style.display = "flex";
      this.eventRemove();
    }
    return over;
  }

  // 게임오버 후 이벤트 제거
  eventRemove() {
    window.removeEventListener("keydown", this.event);
  }

  // 0.5초마다 블록이 한칸 씩 내려간다.
  timer() {
    const timer = setInterval(() => {
      this.downMove();
    }, 500);
  }
}

new App();
