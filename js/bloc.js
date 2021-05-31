export class Bloc {
  constructor() {
    this.T_MINO = {
      index: 0,
      bloc: [
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
      ]
    },
      this.O_MINO = {
        index: 0,
        bloc: [
          [
            [0, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
          ]
        ]
      },
      this.Z_MINO = {
        index: 0,
        beforIndex: 0,
        bloc: [
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
        ]
      },
      this.S_MINO = {
        index: 0,
        bloc: [
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
      },
      this.J_MINO = {
        index: 0,
        bloc: [
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
      },
      this.L_MINO = {
        index: 0,
        bloc: [
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
      },
      this.I_MINO = {
        index: 0,
        beforIndex: 0,
        bloc: [
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
      }
  }

  getT_MINO() {
    return this.T_MINO.bloc[0];
  }
  getI_MINO() {
    return this.I_MINO.bloc[0];
  }
  getZ_MINO() {
    return this.Z_MINO.bloc[0];
  }

  getInstance() {
    return getT_MINO();
  }
  
}