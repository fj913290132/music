import React, { memo } from 'react'
import { SongMenuItemWrapper } from './style'
import { HotResult } from '@/views/discover/children-views/recommend/type'
import { formatCount, getImageSize } from '@/utils/format'
interface IProps {
  children?: React.ReactNode
  itemData: HotResult
}

const SongMenuItem: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <>
      <SongMenuItemWrapper>
        <div className="song-top">
          <img src={getImageSize(itemData.picUrl, 140)} alt="" srcSet="" />
          <div className="cover sprite_cover">
            <div className="info sprite_cover">
              <span>
                <i className="sprite_icon headset"></i>
                <span className="count">{formatCount(itemData.playCount)}</span>
              </span>
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
        <div className="song-bottom">{itemData.name}</div>
      </SongMenuItemWrapper>
    </>
  )
}

SongMenuItem.defaultProps = {}

export default memo(SongMenuItem)
