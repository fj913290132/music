import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { BannerRoot, initialStateType } from '../type'
import { getBanners } from '../service'

export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
  const res: BannerRoot = await getBanners()
  console.log('fetchBannersDataAction', res)
  return res
})

const initialState: initialStateType = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
      state.banners = payload.banners
    })
  }
})
export default recommendSlice.reducer
