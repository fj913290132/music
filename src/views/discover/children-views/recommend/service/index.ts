import hyRequest from '@/service-class'
import { BannerRoot } from '../type'

export function getBanners() {
  return hyRequest.get<BannerRoot>({
    url: '/banner'
  })
}
