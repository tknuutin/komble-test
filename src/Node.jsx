

import React from 'react'

import { Players } from './players' 

export const Node = ({ nodeState, type = 'path' }) => {
  return (
    <div className={"node " + type}>
      {nodeState.piece !== Players.NONE ? (
        <div className={`piece piece-${nodeState.piece}`}/>
      ) : null}
    </div>
  )
}



