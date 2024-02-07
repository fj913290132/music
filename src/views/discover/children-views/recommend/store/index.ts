import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { BannerRoot, initialStateType } from '../type'
import { getBanners } from '../service'
//第一种方法
// export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
//   const res: BannerRoot = await getBanners()
//   console.log('fetchBannersDataAction', res)
//   return res
// })

export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  async (payload, { dispatch }) => {
    const res: BannerRoot = await getBanners()
    dispatch(setBanners(res.banners))
    console.log('fetchBannersDataAction', payload)
  }
)
const initialState: initialStateType = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBanners(state, { payload }) {
      state.banners = payload
    }
  }
  //第一种方法
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload.banners
  //   })
  // }
})
export default recommendSlice.reducer
export const { setBanners } = recommendSlice.actions
