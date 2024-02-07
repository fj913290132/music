import request from '@/service-fn'
import hyRequest from '@/service-class'

export interface Banner {
  imageUrl: string
  targetId: number
  adid?: any
  targetType: number
  titleColor: string
  typeTitle: string
  url?: any
  exclusive: boolean
  monitorImpress?: any
  monitorClick?: any
  monitorType?: any
  monitorImpressList?: any
  monitorClickList?: any
  monitorBlackList?: any
  extMonitor?: any
  extMonitorInfo?: any
  adSource?: any
  adLocation?: any
  adDispatchJson?: any
  encodeId: string
  program?: any
  event?: any
  video?: any
  song?: any
  scm: string
  bannerBizType: string
}

export interface RootObject {
  banners: Banner[]
  code: number
  nihao?: []
  buhao?: any
  caicai?: string
}

export const getHomeList: () => Promise<RootObject> = () => {
  return request({
    url: '/banner',
    method: 'get'
  })
}

export const getHomeList2 = () => {
  return hyRequest.get<RootObject>({
    url: '/banner'
  })
}
