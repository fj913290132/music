import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Foucs: React.FC<IProps> = () => {
  return <div>Foucs</div>
}

Foucs.defaultProps = {}

export default memo(Foucs)
