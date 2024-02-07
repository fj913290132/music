import { useAppDispatch } from '@/hooks/hooks'
import React, { memo, useEffect } from 'react'
import { fetchBannersDataAction } from './store'
import TopBanner from './children-compoents/top-banner'
interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
  }, [])
  return (
    <>
      <TopBanner />
      <div>Recommend</div>
    </>
  )
}

Recommend.defaultProps = {}

export default memo(Recommend)
