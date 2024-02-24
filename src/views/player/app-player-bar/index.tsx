import React, { memo, useRef, useState, useEffect } from 'react'
import {
  AppPlayerBarWrapper,
  BarControl,
  BarPlayInfo,
  BarOperator
} from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { useAppSelector } from '@/hooks/hooks'
import { getSongPlayUrl } from '@/utils/handle-player'
import { formatTime } from '@/utils/format'
interface IProps {
  children?: React.ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  const currentSong = useAppSelector((state) => state.player.currentSong)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  /** 组件内部的事件处理 */
  const audioRef = useRef<HTMLAudioElement>(null)
  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败:', err)
      })

    // 2.获取音乐的总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    const isSliding = false
    // 2.计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
  }
  return (
    <>
      <AppPlayerBarWrapper
        className="sprite_playbar"
        ref={(el) => {
          el && el.style.setProperty('bottom', '0')
        }}
      >
        <div className="content wrap-v2">
          <BarControl $isplaying={isPlaying}>
            <button className="btn sprite_playbar prev"></button>
            <button
              className="btn sprite_playbar play"
              onClick={handlePlayBtnClick}
            ></button>
            <button className="btn sprite_playbar next"></button>
          </BarControl>
          <BarPlayInfo>
            <Link to="/player">
              <img className="image" src={currentSong?.al?.picUrl} alt="" />
            </Link>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong?.al?.name}</span>
                <span style={{ marginLeft: '15px' }}>
                  {currentSong?.ar[0]?.name}
                </span>
                <div className="singer-name"></div>
              </div>
              <div className="progress">
                <Slider
                  tooltip={{ formatter: null }}
                  step={0.5}
                  value={progress}
                />
                <div className="time">
                  <span className="current">{formatTime(currentTime)}</span>
                  <span className="divider">/</span>
                  <span className="duration">{formatTime(duration)}</span>
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
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
      </AppPlayerBarWrapper>
    </>
  )
}

AppPlayerBar.defaultProps = {}

export default memo(AppPlayerBar)
