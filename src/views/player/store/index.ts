import { createSlice } from '@reduxjs/toolkit'

interface IpalyerState {
  name: string
  score: number
}

const initialState: IpalyerState = {
  name: 'Player',
  score: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addScore: (state) => {
      state.score += 1
    },
    resetScore: (state) => {
      state.score = 0
    }
  }
})
export const { addScore, resetScore } = playerSlice.actions
export default playerSlice.reducer
