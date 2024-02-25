import fjRequest from '@/service-class'
import { SongRoot, lyricRoot } from '../store/types'

export function getSongDetail(ids: number) {
  return fjRequest.get<SongRoot>({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return fjRequest.get<lyricRoot>({
    url: '/lyric',
    params: {
      id
    }
  })
}
