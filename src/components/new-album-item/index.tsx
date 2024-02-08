import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <AlbumItemWrapper>
      <div className="albun-item-top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="" className="albun-item-cover sprite_cover"></a>
      </div>
      <div className="albun-item-bottom">
        <div className="albun-item-name">{itemData.name}</div>
        <div className="albun-item-artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
