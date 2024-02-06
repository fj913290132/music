import React, { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './children-compoents/nav-bar'
interface IProps {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const discover: React.FC<IProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

discover.defaultProps = {}

export default memo(discover)
