import React, { memo } from 'react'
interface IProps {
  children?: React.ReactNode
}

const Djradio: React.FC<IProps> = () => {
  return <div>Djradio</div>
}

Djradio.defaultProps = {}

export default memo(Djradio)
