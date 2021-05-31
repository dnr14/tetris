export class Bloc {
  constructor() {
    this.T_MINO = {
      index: 0,
      prevIndex: 0,
      position: [
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
        ],
      ],
      nextPosition: function () {
        this.index++;
        if (this.position.length == this.index) {
          this.index = 0;
        }
        this.prevIndex = this.index;
        return this.position[this.getIndex()];
      },
      prevPosition: function () {
        return this.position[this.getPrevIndex()];
      },
      getIndex: function () {
        return this.index;
      },
      getPrevIndex() {
        return this.prevIndex;
      }
    },
      this.O_MINO = {
        index: 0,
        position: [
          [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
          ]
        ],
        nextPosition: function () {
          this.index++;
          if (this.position.length == this.index) {
            this.index = 0;
          }
          this.prevIndex = this.index;
          return this.position[this.getIndex()];
        },
        prevPosition: function () {
          return this.position[this.getPrevIndex()];
        },
        getIndex: function () {
          return this.index;
        },
        getPrevIndex() {
          return this.prevIndex;
        }
      },
      this.Z_MINO = {
        index: 0,
        prevIndex: 0,
        position: [
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
        ],
        nextPosition: function () {
          this.index++;
          if (this.position.length == this.index) {
            this.index = 0;
          }
          this.prevIndex = this.index;
          return this.position[this.getIndex()];
        },
        prevPosition: function () {
          return this.position[this.getPrevIndex()];
        },
        getIndex: function () {
          return this.index;
        },
        getPrevIndex() {
          return this.prevIndex;
        }
      },
      this.S_MINO = {
        index: 0,
        position: [
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
        ],
        nextPosition: function () {
          this.index++;
          if (this.position.length == this.index) {
            this.index = 0;
          }
          this.prevIndex = this.index;
          return this.position[this.getIndex()];
        },
        prevPosition: function () {
          return this.position[this.getPrevIndex()];
        },
        getIndex: function () {
          return this.index;
        },
        getPrevIndex() {
          return this.prevIndex;
        }
      },
      this.J_MINO = {
        index: 0,
        position: [
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
        ],
        nextPosition: function () {
          this.index++;
          if (this.position.length == this.index) {
            this.index = 0;
          }
          this.prevIndex = this.index;
          return this.position[this.getIndex()];
        },
        prevPosition: function () {
          return this.position[this.getPrevIndex()];
        },
        getIndex: function () {
          return this.index;
        },
        getPrevIndex() {
          return this.prevIndex;
        }
      },
      this.L_MINO = {
        index: 0,
        position: [
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
        ],
        nextPosition: function () {
          this.index++;
          if (this.position.length == this.index) {
            this.index = 0;
          }
          this.prevIndex = this.index;
          return this.position[this.getIndex()];
        },
        prevPosition: function () {
          return this.position[this.getPrevIndex()];
        },
        getIndex: function () {
          return this.index;
        },
        getPrevIndex() {
          return this.prevIndex;
        }
      },
      this.I_MINO = {
        index: 0,
        prevIndex: 0,
        position: [
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
        ],
        nextPosition: function () {
          this.index++;
          if (this.position.length == this.index) {
            this.index = 0;
          }
          this.prevIndex = this.index;
          return this.position[this.getIndex()];
        },
        prevPosition: function () {
          return this.position[this.getPrevIndex()];
        },
        getIndex: function () {
          return this.index;
        },
        getPrevIndex() {
          return this.prevIndex;
        }
      }
  }

  getT_MINO() {
    return this.T_MINO;
  }
  getO_MINO() {
    return this.O_MINO;
  }
  getZ_MINO() {
    return this.Z_MINO;
  }
  getS_MINO() {
    return this.S_MINO;
  }
  getJ_MINO() {
    return this.J_MINO;
  }
  getL_MINO() {
    return this.L_MINO;
  }
  getI_MINO() {
    return this.I_MINO;
  }

  getInstance() {
    // return this.getT_MINO();
    // return this.getO_MINO();
    // return this.getZ_MINO();
    // return this.getS_MINO();
    // return this.getJ_MINO();
    // return this.getL_MINO();
    // return this.getI_MINO();
  }

}