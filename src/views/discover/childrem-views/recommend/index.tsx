import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  return <div>Recommend</div>
}

Recommend.defaultProps = {}

export default memo(Recommend)
