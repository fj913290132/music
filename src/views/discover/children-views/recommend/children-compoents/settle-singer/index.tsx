import React, { memo } from 'react'
import { SettleSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/hooks/hooks'
import { getImageSize } from '@/utils/format'
interface IProps {
  children?: React.ReactNode
}

const SettleSinger: React.FC<IProps> = () => {
  const settleSingers = useAppSelector((state) => state.recommend.settleSingers)
  return (
    <>
      <SettleSingerWrapper>
        <AreaHeaderV2
          title="入驻歌手"
          moreText="查看全部"
          moreLink="/discover/artist"
        />
        <div className="artists">
          {settleSingers.map((item) => {
            return (
              <a href="/discover/artist" className="item" key={item.id}>
                <img src={getImageSize(item.picUrl, 100, 100)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="alia">{item.alias.join('')}</div>
                </div>
              </a>
            )
          })}
        </div>
        <div className="apply-for">
          <a href="">申请成为网易音乐人</a>
        </div>
      </SettleSingerWrapper>
    </>
  )
}

SettleSinger.defaultProps = {}

export default memo(SettleSinger)
