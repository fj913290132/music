import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './modules/demo'

const store = configureStore({
  reducer: {
    demo: demoReducer
  }
})

export default store
