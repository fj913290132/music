import { useAppDispatch } from '@/hooks/hooks'
import React, { memo, useEffect } from 'react'
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction,
  fetchNewAkbunDataAction,
  fetchRankingDataAction
} from './store'
import TopBanner from './children-compoents/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './children-compoents/hot-recommend'
import NewAlbum from './children-compoents/new-album'
import TopRanking from './children-compoents/top-ranking'
interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchBannersDataAction({ name: '张三' }))
    dispatch(fetchHotRecommendDataAction())
    dispatch(fetchNewAkbunDataAction())
    dispatch(fetchRankingDataAction())
  }, [])
  return (
    <>
      <RecommendWrapper>
        <TopBanner />
        <div className="content wrap-v2">
          <div className="left">
            <HotRecommend />
            <NewAlbum />
            <TopRanking />
          </div>
          <div className=" right ">right</div>
        </div>
      </RecommendWrapper>
    </>
  )
}

Recommend.defaultProps = {}

export default memo(Recommend)
