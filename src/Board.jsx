
import React from 'react'

import { Node } from './Node'
import { SIDE_LENGTH, DIAGONAL_LENGTH } from './state'

const PATH_PARTS = [
  { name: 'top', length: SIDE_LENGTH },
  { name: 'top-right', length: DIAGONAL_LENGTH },
  { name: 'right', length: SIDE_LENGTH },
  { name: 'bottom-right', length: DIAGONAL_LENGTH },
  { name: 'bottom', length: SIDE_LENGTH },
  { name: 'bottom-left', length: DIAGONAL_LENGTH },
  { name: 'left', length: SIDE_LENGTH },
  { name: 'top-left', length: DIAGONAL_LENGTH },
]

const getPathParts = (pathState) => {
  return PATH_PARTS.reduce(
    ({ cursor, parts }, { name, length }) => {

      const cursorStop = cursor + length
      const nodes = pathState.slice(cursor, cursorStop)

      return {
        cursor: cursorStop,
        parts: {
          ...parts,
          [name]: nodes
        }
      }
    },
    { cursor: 0, parts: {} }
  )
}

const PathPart = ({ name, parts }) => {
  const nodes = parts[name]
  return (
    <div className={'path-' + name}>
      {nodes.map((nodeState, i) => {
        return (
          <Node key={i} nodeState={nodeState}/>
        )
      })}
    </div>
  )
}

const Path = ({ pathState }) => {
  const { parts } = getPathParts(pathState)
  // debugger
  return (
    <>
      <PathPart name="top" parts={parts}/>
      <PathPart name="top-right" parts={parts}/>
      <PathPart name="right" parts={parts}/>
      <PathPart name="bottom-right" parts={parts}/>
      <PathPart name="bottom" parts={parts}/>
      <PathPart name="bottom-left" parts={parts}/>
      <PathPart name="left" parts={parts}/>
      <PathPart name="top-left" parts={parts}/>
    </>
  )
}

export const Board = ({ state }) => {
  return (
    <div className="board">
      <Path pathState={state.path}/>
    </div>
  )
}

