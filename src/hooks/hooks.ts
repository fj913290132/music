import store from '@/store'
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux'

type stateType = typeof store.getState
type IrootState = ReturnType<stateType>
export const useAppSelector: TypedUseSelectorHook<IrootState> = useSelector

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const appShallowEqual = shallowEqual
