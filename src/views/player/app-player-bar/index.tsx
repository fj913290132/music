import React, { memo, useRef, useState, useEffect } from 'react'
import {
  AppPlayerBarWrapper,
  BarControl,
  BarPlayInfo,
  BarOperator
} from './style'
import { Link } from 'react-router-dom'
import { Slider, message } from 'antd'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { getSongPlayUrl } from '@/utils/handle-player'
import { formatTime } from '@/utils/format'
import { changeLyricsIndex, changeMusic, changePlayerMode } from '../store'
interface IProps {
  children?: React.ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { currentSong, lyrics, lyricsIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricsIndex: state.player.lyricsIndex,
      playMode: state.player.playMode
    }),
    appShallowEqual
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {
        setIsPlaying(false)
        //console.log('歌曲播放失败:', err)
      })

    // 2.获取音乐的总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    // 2.计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
    // 3.根据当前的时间匹配对应的歌词
    // currentTime/lyrics
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    if (lyricsIndex === index || index === -1) return
    dispatch(changeLyricsIndex(index))
    // 5.展示对应的歌词
    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0,
      className: 'my-message',
      style: {
        marginTop: '85vh',
        color: '#fff'
      }
    })
  }
  function handleSliderChanging(value: number) {
    // 0.目前是处于拖拽状态
    setIsSliding(true)

    // 1.设置progress
    setProgress(value)

    // 2.获取value对应位置的时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }
  function handleSliderChanged(value: number) {
    // 1.获取点击位置的时间
    const currentTime = (value / 100) * duration

    // 2.设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000

    // 3.currentTime/progress
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayerMode(newPlayMode))
  }
  function handleChangeMusic(isNext: boolean = true) {
    dispatch(changeMusic(isNext))
  }
  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
    } else {
      handleChangeMusic(true)
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
            <button
              className="btn sprite_playbar prev"
              onClick={() => handleChangeMusic(false)}
            ></button>
            <button
              className="btn sprite_playbar play"
              onClick={handlePlayBtnClick}
            ></button>
            <button
              className="btn sprite_playbar next"
              onClick={() => handleChangeMusic()}
            ></button>
          </BarControl>
          <BarPlayInfo>
            <Link to="/player">
              <img className="image" src={currentSong?.al?.picUrl} alt="" />
            </Link>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong?.name}</span>
                <span style={{ marginLeft: '15px' }}>
                  {currentSong?.ar?.[0]?.name}
                </span>
                <div className="singer-name"></div>
              </div>
              <div className="progress">
                <Slider
                  tooltip={{ formatter: null }}
                  step={0.5}
                  value={progress}
                  onChange={handleSliderChanging}
                  onChangeComplete={handleSliderChanged}
                />
                <div className="time">
                  <span className="current">{formatTime(currentTime)}</span>
                  <span className="divider">/</span>
                  <span className="duration">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </BarPlayInfo>
          <BarOperator $playMode={playMode}>
            <div className="left">
              <button className="btn pip"></button>
              <button className="btn sprite_playbar favor"></button>
              <button className="btn sprite_playbar share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="btn sprite_playbar volume"></button>
              <button
                className="btn sprite_playbar loop"
                onClick={handleChangePlayMode}
              ></button>
              <button className="btn sprite_playbar playlist"></button>
            </div>
          </BarOperator>
        </div>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleTimeEnded}
        />
      </AppPlayerBarWrapper>
    </>
  )
}

AppPlayerBar.defaultProps = {}

export default memo(AppPlayerBar)
