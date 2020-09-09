import { Players } from "./players"

export const gameStep = (state, action) => {
  switch (action.type) {
    case 'DEBUG': {
      const { path } = state
      const index = path.findIndex(({ piece }) => piece === Players.PLAYER1)
      if (index < 0) {
        throw new Error('what')
      }
      const replaced = { piece: Players.NONE }
      const newNode = { piece: Players.PLAYER1 }


      const newPath = index >= path.length - 1
        ? [
          newNode,
          ...path.slice(1, path.length - 1),
          replaced
        ] : [
          ...path.slice(0, index),
          replaced,
          newNode,
          ...path.slice(index + 2, path.length)
        ]

      return {
        ...state.path,
        path: newPath
      }
    }

    default: {
      return state
    }
  }
}

