import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Artist: React.FC<IProps> = () => {
  return <div>Artist</div>
}

Artist.defaultProps = {}

export default memo(Artist)
