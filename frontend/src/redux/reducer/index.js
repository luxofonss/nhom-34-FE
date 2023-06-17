import { combineReducers } from 'redux'
import authReducer from '@src/containers/authentication/feature/Auth/authSlice'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { adminApi } from '@src/containers/app/feature/Admin/adminService'

export const rootReducer = combineReducers({
  auth: authReducer,
  authApi: authApi.reducer,
  adminApi: adminApi.reducer
})
