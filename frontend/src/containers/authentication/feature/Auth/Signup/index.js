import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useSignupMutation } from '../authService'
import { login, setUser } from '../authSlice'

function Signup() {
  const [open, setOpen] = useState(false)
  const [signup, { isLoading }] = useSignupMutation()
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLoggedIn])

  const onSubmit = async (data) => {
    const response = await signup(data)
    if (!response.error) {
      dispatch(setUser(response.data.metadata.user))
      dispatch(login())
    } else {
      toast.error(response.error?.data?.message?.error || 'Something went wrong, please try again later!')
    }
  }

  return (
    <div className='auth-form'>
    <div className='auth-form__container'>
      <div className='auth-form__header'>
        <h3 className='auth-form__heading'>Đăng Ký</h3>
        <div className='auth-form__switch-btn'>Đăng Nhập</div>
      </div>
      <div className='auth-form__form'>
        <div className='auth-form__group'>
          <input type='text' placeholder='Số điện thoại' className='auth-form__input' />
        </div>
        <div className='auth-form__group'>
          <input type='password' placeholder='Mật khẩu' className='auth-form__input' />
          <input type='password' placeholder='Nhập lại Mật khẩu' className='auth-form__input' />
        </div>
      </div>
      <div className='auth-form__help'>
        <div className='auth-form__help--separate'></div>
        <button className='auth-form__help-link'>Cần trợ giúp?</button>
      </div>
      <div className='auth-form__control'>
        <button className='btn auth-form__back'>TRỞ LẠI</button>
        <button className='btn btn--primary'>ĐĂNG KÝ</button>
      </div>
    </div>

    {/* <div className='auth-form__signin'>
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
    </div> */}
  </div>
  )
}

export default Signup
