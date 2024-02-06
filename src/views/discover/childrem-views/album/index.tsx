import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Album: React.FC<IProps> = () => {
  return <div>album</div>
}

Album.defaultProps = {}

export default memo(Album)
