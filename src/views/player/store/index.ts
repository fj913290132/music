import { createSlice } from '@reduxjs/toolkit'

interface IpalyerState {
  name: string
  score: number
  currentSong: any
}

const initialState: IpalyerState = {
  name: 'Player',
  score: 0,
  currentSong: {
    name: '一直很安静',
    id: 1968781675,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 14312549,
        name: '王贰浪',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 6,
    crbt: null,
    cf: '',
    al: {
      id: 149013204,
      name: '一直很安静',
      picUrl:
        'https://p2.music.126.net/d3P6hiIEDH4Gp9cApS5b3A==/109951167740623345.jpg',
      tns: [],
      pic_str: '109951167740623345',
      pic: 109951167740623340
    },
    dt: 228565,
    h: {
      br: 320000,
      fid: 0,
      size: 9145005,
      vd: -21850,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5487021,
      vd: -19214,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3658029,
      vd: -17445,
      sr: 48000
    },
    sq: {
      br: 827288,
      fid: 0,
      size: 23636181,
      vd: -21846,
      sr: 48000
    },
    hr: {
      br: 1596963,
      fid: 0,
      size: 45626308,
      vd: -21846,
      sr: 48000
    },
    a: null,
    cd: '01',
    no: 0,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17716748288,
    originCoverType: 2,
    originSongSimpleData: {
      songId: 5260494,
      name: '一直很安静',
      artists: [
        {
          id: 7061,
          name: '阿桑'
        }
      ],
      albumMeta: {
        id: 512384,
        name: 'Listen To HIM'
      }
    },
    tagPicList: null,
    resourceState: true,
    version: 6,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 0
  }
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
