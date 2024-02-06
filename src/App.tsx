import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { changeState, increment } from './store/modules/demo'
import { appShallowEqual, useAppDispatch, useAppSelector } from './hooks/hooks'

function App() {
  const state = useAppSelector((state) => state.demo.count, appShallowEqual)
  const dispatch = useAppDispatch()
  function add() {
    dispatch(increment())
  }
  function change() {
    dispatch(changeState(123))
  }
  return (
    <>
      <div>当前计数:{state}</div>
      <button onClick={change}>改变</button>
      <button
        onClick={() => {
          add()
        }}
      >
        +1
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
    </>
  )
}

export default App
