import { Navigate, RouteObject } from 'react-router-dom'
import React from 'react'

// import Discover from '@/views/discover'
// import Download from '@/views/download'
// import Mine from '@/views/mine'
// import Foucs from '@/views/foucs'

const Discover = React.lazy(() => import('@/views/discover'))
const Album = React.lazy(() => import('@/views/discover/children-views/album'))
const Artist = React.lazy(
  () => import('@/views/discover/children-views/artist')
)
const Djradio = React.lazy(
  () => import('@/views/discover/children-views/djradio')
)
const Ranking = React.lazy(
  () => import('@/views/discover/children-views/ranking')
)
const Recommend = React.lazy(
  () => import('@/views/discover/children-views/recommend')
)
const Songs = React.lazy(() => import('@/views/discover/children-views/songs'))
const Download = React.lazy(() => import('@/views/download'))
const Mine = React.lazy(() => import('@/views/mine'))
const Foucs = React.lazy(() => import('@/views/foucs'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recommend" /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/album', element: <Album /> },
      { path: '/discover/Artist', element: <Artist /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/songs', element: <Songs /> }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/foucs',
    element: <Foucs />
  }
]

export default routes
