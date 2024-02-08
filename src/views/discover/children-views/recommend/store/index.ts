import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Playlist, initialStateType } from '../type'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service'
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

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 获取榜单的数据
    // 1.每一个请求单独处理
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜的数据', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜的数据', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜的数据', res)
    //         break
    //     }
    //   })
    // }
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }

    Promise.all(promises).then((res) => {
      const playlists: Playlist[] = res.map((item) => item.playlist)
      console.log(playlists)
      dispatch(setRankingsAction(playlists))
    })
  }
)

const initialState: initialStateType = {
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  rankings: []
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
    },
    setRankingsAction(state, { payload }) {
      state.rankings = payload
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
export const { setBanners, setHOtRecommend, setNewAlbums, setRankingsAction } =
  recommendSlice.actions
