import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { getHomeList } from './api'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  useEffect(() => {
    getHomeList().then((res) => {
      console.log(res.banners)
    })
  })
  return (
    <>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </>
  )
}

export default App
