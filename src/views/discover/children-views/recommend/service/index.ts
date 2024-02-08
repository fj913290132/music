import { AlbumRoot, BannerRoot, HotRoot, rankingsRoot } from '../type'
import fjRequest from '@/service-class'

export function getBanners() {
  return fjRequest.get<BannerRoot>({
    url: '/banner'
  })
}

export function getHotRecommend(limit?: number) {
  return fjRequest.get<HotRoot>({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return fjRequest.get<AlbumRoot>({
    url: '/album/newest'
  })
}
export function getPlaylistDetail(id: number) {
  return fjRequest.get<rankingsRoot>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
