import store from '@/store'
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux'

export type stateType = typeof store.getState
export type IrootState = ReturnType<stateType>
export const useAppSelector: TypedUseSelectorHook<IrootState> = useSelector

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const appShallowEqual = shallowEqual
