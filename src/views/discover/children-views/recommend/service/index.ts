import hyRequest from '@/service-class'

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}
