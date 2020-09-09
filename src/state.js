
import { Players } from './players' 

export const SIDE_LENGTH = 5
export const DIAGONAL_LENGTH = 2
export const PIECES = 4

export const SIDES = 4

const emptyNode = () => ({ piece: Players.NONE })
const emptyNodes = (length) => Array(length)
  .fill()
  .map(emptyNode)

export const initialBoardState = {
  path: emptyNodes(SIDE_LENGTH * SIDES + DIAGONAL_LENGTH * SIDES),
  
  piecesWaiting: {
    [Players.PLAYER1]: PIECES,
    [Players.PLAYER2]: PIECES,
    [Players.PLAYER3]: PIECES,
    [Players.PLAYER4]: PIECES,
  },

  endAreas: {
    [Players.PLAYER1]: emptyNodes(PIECES),
    [Players.PLAYER2]: emptyNodes(PIECES),
    [Players.PLAYER3]: emptyNodes(PIECES),
    [Players.PLAYER4]: emptyNodes(PIECES),
  }
}

initialBoardState.path[0] = {
  piece: Players.PLAYER1
}
