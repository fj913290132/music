import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankingItem from '../top-ranking-item'
import { useAppSelector } from '@/hooks/hooks'
interface IProps {
  children?: React.ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  const rankings = useAppSelector((state) => state.recommend.rankings)
  return (
    <>
      <TopRankingWrapper>
        <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
        <div className="content">
          {rankings.map((item: any) => {
            return <TopRankingItem key={item.id} itemData={item} />
          })}
        </div>
      </TopRankingWrapper>
    </>
  )
}

TopRanking.defaultProps = {}

export default memo(TopRanking)
