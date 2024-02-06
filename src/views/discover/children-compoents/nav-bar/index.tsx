import React, { memo } from 'react'
import { NacBarWrapper } from './style'

import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: React.ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NacBarWrapper color="blue" height="30" className="wrap-v1">
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'active' : 'meiyou'
                }}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
    </NacBarWrapper>
  )
}

NavBar.defaultProps = {}

export default memo(NavBar)
