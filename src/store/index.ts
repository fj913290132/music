import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './modules/demo'
import recommendReducer from '@/views/discover/children-views/recommend/store'
import playerReducer from '@/views/player/store'

const store = configureStore({
  reducer: {
    demo: demoReducer,
    recommend: recommendReducer,
    player: playerReducer
  }
})

export default store
