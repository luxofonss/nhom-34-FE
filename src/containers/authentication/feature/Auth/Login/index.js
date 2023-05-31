/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useLoginMutation } from '../authService'
import { login, setUser } from '../authSlice'

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

  return <div>Sign in</div>
}

export default Login
