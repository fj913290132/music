import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { getHomeList } from './api/index(copy)'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './hooks/hooks'
import { fetchCurrentSongAction } from './views/player/store'

function App() {
  useEffect(() => {
    getHomeList()
    dispatch(fetchCurrentSongAction(2124385868))
  }, [])
  const dispatch = useAppDispatch()

  return (
    <>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <AppPlayerBar />
    </>
  )
}

export default App
