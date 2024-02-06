import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Mine: React.FC<IProps> = () => {
  return <div>Mine</div>
}

Mine.defaultProps = {}

export default memo(Mine)
