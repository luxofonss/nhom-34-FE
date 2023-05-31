/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useLoginMutation } from '../authService'
import { login, setUser } from '../authSlice'
import './login.css'

function Login() {
  const [open, setOpen] = useState(false)
  const [loginRequest, { isLoading }] = useLoginMutation()
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(auth.isLoggedIn)
    if (auth.isLoggedIn) {
      console.log('navigate')
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLoggedIn])

  const onSubmit = async (loginData) => {
    const response = await loginRequest(loginData)
    console.log('response: ', response)

    if (!response.error) {
      dispatch(setUser(response.data.metadata.user))
      dispatch(login())
    } else {
      toast.warn(response.error?.data?.message || 'Login error, please try again!')
    }
  }

  const handleGoogleLogin = async () => {
    let timer = null
    const googleLoginUrl = 'http://localhost:8080/v1/api/auth/google'
    const newWindow = window.open(googleLoginUrl, '_self')
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('Authentication successful')
          if (timer) {
            clearInterval(timer)
          }
        }
      }, 500)
    }
  }

  return (
    <div className='auth-form'>
      <div className='auth-form__container'>
        <div className='auth-form__header'>
          <h3 className='auth-form__heading'>Đăng Nhập</h3>
          <div className='auth-form__switch-btn'>Đăng ký</div>
        </div>
        <div className='auth-form__form'>
          <div className='auth-form__group'>
            <input type='text' placeholder='Số điện thoại' className='auth-form__input' />
          </div>
          <div className='auth-form__group'>
            <input type='password' placeholder='Mật khẩu' className='auth-form__input' />
          </div>
        </div>
        <div className='auth-form__help'>
          <button className='auth-form__help-link auth-form__help-forgot'>Quên Mật Khẩu</button>
          <div className='auth-form__help--separate'></div>
          <button className='auth-form__help-link'>Cần trợ giúp?</button>
        </div>
        <div className='auth-form__control'>
          <button className='btn auth-form__back'>TRỞ LẠI</button>
          <button className='btn btn--primary'>ĐĂNG NHẬP</button>
        </div>
      </div>

      <div className='auth-form__signin'>
        <button className='btn btn-signin auth-form__signin-sms'>
          <i className='auth-form__signin-icon fas fa-sms'></i>
          <p className='auth-form__signin-text'>SMS</p>
        </button>
        <button className='btn btn-signin auth-form__signin-fb'>
          <i className='auth-form__signin-icon fab fa-facebook-square'></i>
          <p className='auth-form__signin-text'>Facebook</p>
        </button>
        <button className='btn btn-signin auth-form__signin-gg'>
          <i className='auth-form__signin-icon fab fa-google'></i>
          <p className='auth-form__signin-text'>Google</p>
        </button>
      </div>
    </div>
  )
}

export default Login
