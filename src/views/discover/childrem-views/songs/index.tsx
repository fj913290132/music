import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Songs: React.FC<IProps> = () => {
  return <div>Songs</div>
}

Songs.defaultProps = {}

export default memo(Songs)
