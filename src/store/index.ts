import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './modules/demo'
import recommendReducer from '@/views/discover/children-views/recommend/store'

const store = configureStore({
  reducer: {
    demo: demoReducer,
    recommend: recommendReducer
  }
})

export default store
