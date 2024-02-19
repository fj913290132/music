import React, { memo } from 'react'
import { AppPlayerBarWrapper } from './style'
interface IProps {
  children?: React.ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  return (
    <>
      <AppPlayerBarWrapper
        className="sprite_playbar"
        ref={(el) => {
          el && el.style.setProperty('bottom', '0')
        }}
      >
        <div>AppPlayerBar</div>
      </AppPlayerBarWrapper>
    </>
  )
}

AppPlayerBar.defaultProps = {}

export default memo(AppPlayerBar)
