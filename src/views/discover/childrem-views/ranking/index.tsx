import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Ranking: React.FC<IProps> = () => {
  return <div>Ranking</div>
}

Ranking.defaultProps = {}

export default memo(Ranking)
