import { createSlice } from '@reduxjs/toolkit'

const demo = createSlice({
  name: 'demo',
  initialState: {
    count: 10
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    changeState(state, { payload }) {
      state.count += payload
    }
  }
})
export const { increment, decrement, changeState } = demo.actions
export default demo.reducer
