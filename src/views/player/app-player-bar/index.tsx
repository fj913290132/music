import React, { memo } from 'react'
import {
  AppPlayerBarWrapper,
  BarControl,
  BarPlayInfo,
  BarOperator
} from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
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
        <div className="content wrap-v2">
          <BarControl>
            <button className="btn sprite_playbar prev"></button>
            <button className="btn sprite_playbar play"></button>
            <button className="btn sprite_playbar next"></button>
          </BarControl>
          <BarPlayInfo>
            <Link to="/player">
              <img
                className="image"
                src="https://p1.music.126.net/omxC-mmwgGHbacIVBZYNkA==/109951163028873411.jpg"
                alt=""
              />
            </Link>
            <div className="info">
              <div className="song">
                <div className="song-name">打死砸破 砸破</div>
                <div className="singer-name"></div>
              </div>
              <div className="progress">
                <Slider />
                <div className="time">
                  <span className="current">23:12</span>
                  <span className="divider">/</span>
                  <span className="duration">02:23</span>
                </div>
              </div>
            </div>
          </BarPlayInfo>
          <BarOperator>
            <div className="left">
              <button className="btn pip"></button>
              <button className="btn sprite_playbar favor"></button>
              <button className="btn sprite_playbar share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="btn sprite_playbar volume"></button>
              <button className="btn sprite_playbar loop"></button>
              <button className="btn sprite_playbar playlist"></button>
            </div>
          </BarOperator>
        </div>
      </AppPlayerBarWrapper>
    </>
  )
}

AppPlayerBar.defaultProps = {}

export default memo(AppPlayerBar)
