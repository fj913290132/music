import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { initialStateType } from '../type'
import { getBanners, getHotRecommend, getNewAlbum } from '../service'
//第一种方法
// export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
//   const res = await getBanners()
//   console.log('fetchBannersDataAction', res)
//   return res
// })

//第二种方法 payload是usedispatch时可以传得参数
export const fetchBannersDataAction = createAsyncThunk(
  'banners',
  async (payload, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBanners(res.banners))
    //console.log('fetchBannersDataAction', payload)
  }
)

export const fetchHotRecommendDataAction = createAsyncThunk(
  'banners',
  async (payload, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(setHOtRecommend(res.result))
  }
)
export const fetchNewAkbunDataAction = createAsyncThunk(
  'banners',
  async (payload, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(setNewAlbums(res.albums))
  }
)

const initialState: initialStateType = {
  banners: [],
  hotRecommend: [],
  newAlbums: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBanners(state, { payload }) {
      state.banners = payload
    },
    setHOtRecommend(state, { payload }) {
      state.hotRecommend = payload
    },
    setNewAlbums(state, { payload }) {
      state.newAlbums = payload
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
export const { setBanners, setHOtRecommend, setNewAlbums } =
  recommendSlice.actions
