import React, { ElementRef, memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { appShallowEqual, useAppSelector } from '@/hooks/hooks'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
interface IProps {
  children?: React.ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const banners = useAppSelector((state) => {
    return state.recommend.banners
  }, appShallowEqual)
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /** 事件处理函数 */
  function handleBeforeChange() {
    // setCurrentIndex(-1)
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  /** 获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0 && banners?.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }
  return (
    <>
      <BannerWrapper
        style={{
          background: `url('${bgImageUrl}') center center / 6000px`
        }}
      >
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              fade
              autoplay
              autoplaySpeed={3000}
              effect="fade"
              ref={bannerRef}
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}
            >
              {banners?.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </div>
                )
              })}
            </Carousel>
            <ul className="dots">
              {banners?.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={[
                        'item',
                        index == currentIndex ? 'active' : ''
                      ].join()}
                    ></span>
                  </li>
                )
              })}
            </ul>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left2" onClick={handlePrevClick}></button>
            <button className="btn right2" onClick={handleNextClick}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </>
  )
}

TopBanner.defaultProps = {}

export default memo(TopBanner)
