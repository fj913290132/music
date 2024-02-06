import React, { memo } from 'react'
import { AppFooterWrapper } from './style'

interface IProps {
  children?: React.ReactNode
}

const appFooter: React.FC<IProps> = () => {
  return (
    <AppFooterWrapper fontSize="18">
      <div>appFooter</div>
    </AppFooterWrapper>
  )
}

appFooter.defaultProps = {}

export default memo(appFooter)
