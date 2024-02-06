import React, { memo } from 'react'
import { AppHeaderWrapper } from './style'
interface IProps {
  children?: React.ReactNode
}

const appHeader: React.FC<IProps> = () => {
  return (
    <AppHeaderWrapper>
      <div>appHeader</div>
    </AppHeaderWrapper>
  )
}

appHeader.defaultProps = {}

export default memo(appHeader)
