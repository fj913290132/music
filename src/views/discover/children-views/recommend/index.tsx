import { useAppDispatch } from '@/hooks/hooks'
import React, { memo, useEffect } from 'react'
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction,
  fetchNewAkbunDataAction,
  fetchRankingDataAction,
  fetchSettleSingersDataAction
} from './store'
import TopBanner from './children-compoents/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './children-compoents/hot-recommend'
import NewAlbum from './children-compoents/new-album'
import TopRanking from './children-compoents/top-ranking'
import UserLogin from './children-compoents/user-login'
import SettleSinger from './children-compoents/settle-singer'
import HotAnchor from './children-compoents/hot-anchor'
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
    dispatch(fetchSettleSingersDataAction())
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
          <div className=" right ">
            <UserLogin />
            <SettleSinger />
            <HotAnchor />
          </div>
        </div>
      </RecommendWrapper>
    </>
  )
}

Recommend.defaultProps = {}

export default memo(Recommend)
