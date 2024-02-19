import React, { memo } from 'react'
import { PlayerWrapper } from './style'
interface IProps {
  children?: React.ReactNode
}

const Player: React.FC<IProps> = () => {
  return (
    <>
      <PlayerWrapper>
        <div>Player</div>
      </PlayerWrapper>
    </>
  )
}

Player.defaultProps = {}

export default memo(Player)
