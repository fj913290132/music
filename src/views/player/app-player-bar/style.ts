import React from 'react'
import styled from 'styled-components'

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 100px;
  right: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IBarControl {
  children?: React.ReactNode
  $isplaying: any
}
export const BarControl: React.FC<IBarControl> = styled.div`
  display: flex;
  align-items: center;

  .prev,
  .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0
      ${(props) => (props.$isplaying ? '-165px' : '-204px')};
  }

  .next {
    background-position: -80px -130px;
  }
`

export const BarPlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          margin-left: 10px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        }
        .ant-slider-handle::after {
          display: none;
        }
      }

      .time {
        margin-left: 15px;
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IBarOperator {
  playMode: number
}
export const BarOperator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require('@/assets/img/pip_icon')});
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
