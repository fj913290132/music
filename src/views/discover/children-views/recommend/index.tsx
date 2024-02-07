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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchBannersDataAction({ name: '张三' }))
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
