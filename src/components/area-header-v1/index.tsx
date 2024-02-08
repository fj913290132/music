import React, { memo } from 'react'
import { AreaHeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'
interface IProps {
  children?: React.ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: React.FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props
  return (
    <>
      <AreaHeaderV1Wrapper className="sprite_02">
        <div className="left1">
          <h3 className="title">{title}</h3>
          <div className="keywords">
            {keywords.map((item) => {
              return (
                <div className="item" key={item}>
                  <span className="link">{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="right1">
          <Link className="more" to={moreLink}>
            {moreText}
          </Link>
          <i className="sprite_02 icon"></i>
        </div>
      </AreaHeaderV1Wrapper>
    </>
  )
}

AreaHeaderV1.defaultProps = {}

export default memo(AreaHeaderV1)
