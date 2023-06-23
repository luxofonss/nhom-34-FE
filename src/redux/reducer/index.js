import { combineReducers } from 'redux'
import authReducer from '@src/containers/authentication/feature/Auth/authSlice'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { adminApi } from '@src/containers/app/feature/Admin/adminService'
import customerApi from '@src/containers/app/feature/Customer/customerService'

export const rootReducer = combineReducers({
  auth: authReducer,
  authApi: authApi.reducer,
  adminApi: adminApi.reducer,
  customerApi: customerApi.reducer
})
