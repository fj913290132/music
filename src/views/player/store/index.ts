import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { Song } from './types'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { IrootState } from '@/hooks/hooks'
interface IpalyerState {
  currentSong: Song
  lyrics: ILyric[]
  lyricsIndex: number
  playerList: Song[]
  palySongIndex: number
  playMode: number
}
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IrootState }
>('currentSong', (id: number, { dispatch, getState }) => {
  //查看播放列表是否有
  const playerSongList = getState().player.playerList
  const findIndex = playerSongList.findIndex((item) => item.id == id)
  if (findIndex === -1) {
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const songs = res.songs[0]
      const newPlayerSongList = [...playerSongList]
      newPlayerSongList.push(songs)
      dispatch(changeCurrentSong(songs))
      dispatch(changePlayerList(newPlayerSongList))
      dispatch(changePlaySongIndex(newPlayerSongList.length - 1))
    })
    getSongLyric(id).then((res) => {
      const data = parseLyric(res.lrc.lyric)
      dispatch(changeLyrics(data))
    })
  } else {
    const song = playerSongList[findIndex]
    dispatch(changeCurrentSong(song))
    dispatch(changePlaySongIndex(findIndex))
  }
})

export const changeMusic = createAsyncThunk<
  void,
  boolean,
  { state: IrootState }
>('changeMusic', (isNext, { dispatch, getState }) => {
  const player = getState().player
  const playMode = player.playMode
  const songIndex = player.palySongIndex
  const songList = player.playerList
  let newindex = songIndex
  if (playMode === 1) {
    newindex = Math.floor(Math.random() * songList.length)
  } else {
    newindex = isNext ? songIndex + 1 : songIndex - 1
    if (newindex > songList.length - 1) newindex = 0
    if (newindex < 0) newindex = songList.length - 1
  }
  const song = songList[newindex]
  dispatch(changeCurrentSong(song))
  dispatch(changePlaySongIndex(newindex))
  getSongLyric(song.id).then((res) => {
    const data = parseLyric(res.lrc.lyric)
    dispatch(changeLyrics(data))
  })
})

const initialState: IpalyerState = {
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
  },
  lyrics: [],
  lyricsIndex: -1,
  playerList: [
    {
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
    },
    {
      name: '最好的我们',
      id: 1367333358,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12474254,
          name: '陈飞宇',
          tns: [],
          alias: []
        }
      ],
      alia: ['电影《最好的我们》同名主题曲'],
      pop: 90,
      st: 0,
      rt: '',
      fee: 0,
      v: 26,
      crbt: null,
      cf: '',
      al: {
        id: 79369340,
        name: '最好的我们',
        picUrl:
          'https://p1.music.126.net/ynTPNalD8J92Fq4CgVuN0g==/109951164098068395.jpg',
        tns: [],
        pic_str: '109951164098068395',
        pic: 109951164098068400
      },
      dt: 286525,
      h: {
        br: 320000,
        fid: 0,
        size: 11463405,
        vd: -52253,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6878061,
        vd: -49627,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4585389,
        vd: -47878,
        sr: 48000
      },
      sq: {
        br: 871160,
        fid: 0,
        size: 31201193,
        vd: -52385,
        sr: 48000
      },
      hr: {
        br: 1639170,
        fid: 0,
        size: 58707984,
        vd: -52503,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716805760,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 26,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10869122,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 488010,
      publishTime: 0
    }
  ],
  palySongIndex: -1,
  playMode: 0 //0顺序 1随机 2单曲
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSong(state, { payload }) {
      state.currentSong = payload
    },
    changeLyrics(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricsIndex(state, { payload }) {
      state.lyricsIndex = payload
    },
    changePlaySongIndex(state, { payload }) {
      state.palySongIndex = payload
    },
    changePlayerList(state, ctx) {
      state.playerList = ctx.payload
    },
    changePlayerMode(state, { payload }) {
      state.playMode = payload
    }
  }
})
export const {
  changeCurrentSong,
  changeLyrics,
  changeLyricsIndex,
  changePlaySongIndex,
  changePlayerList,
  changePlayerMode
} = playerSlice.actions
export default playerSlice.reducer
