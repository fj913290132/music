import React, { memo } from 'react'
import { HotWarrper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/hooks/hooks'
import SongMenuItem from '@/components/song-menu-item'
interface IProps {
  children?: React.ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  const hotRecommendList = useAppSelector(
    (state) => state.recommend.hotRecommend
  )

  return (
    <>
      <HotWarrper>
        <AreaHeaderV1
          title="热门推荐"
          keywords={['华语', '流行', '摇滚', '民谣', '电子']}
          moreLink="/discover/songs"
        />
        <div className="recommend-list">
          {hotRecommendList.map((item) => (
            <SongMenuItem key={item.id} itemData={item} />
          ))}
        </div>
      </HotWarrper>
    </>
  )
}

HotRecommend.defaultProps = {}

export default memo(HotRecommend)
