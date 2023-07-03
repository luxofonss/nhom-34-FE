/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import ThemeSwitch from '@src/components/ThemeSwitch'
import Cart from '@src/containers/app/feature/Customer/components/Cart'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/logo.png'
import AvatarDropdown from '../AvatarDropdown'
import Notification from '../Notification'
import SearchBar from '../SearchBar'
import { USER_ROLE } from '@src/configs'

function Header() {
  const userInfo = useSelector((state) => state.auth.user)
  const auth = useSelector((state) => state.auth)

  return (
    <div className='w-screen fixed z-[1000] bg-orange-4 shadow-md'>
      <div className='border-b-[1px] border-b-orange-3'>
        <div className='container mx-auto h-6 text-neutral-0 font-medium text-xs flex justify-between'>
          <div className='flex gap-2 items-center'>
            <Link className='hover:opacity-90 hover:cursor-pointer' to='/shop/product/all'>
              Kênh người bán
            </Link>
            {userInfo?.roles?.includes(USER_ROLE.SHOP) ? null : (
              <Link className='hover:opacity-90 hover:cursor-pointer' to='/shop/register'>
                Trở thành người bán Sope
              </Link>
            )}
            <div className='hover:opacity-90 hover:cursor-pointer'>Tải ứng dụng</div>
            <div className='flex gap-1 items-center'>
              <p>Kết nối</p>
              <div className='hover:opacity-90 hover:cursor-pointer'>FB</div>
              <div className='hover:opacity-90 hover:cursor-pointer'>IG</div>
            </div>
          </div>
          <div className='flex gap-gap1 items-center gap-2'>
            <div className='hover:opacity-90 hover:cursor-pointer'>Săn đơn 1k ngay bây giờ</div>
            <div className='hover:opacity-90 hover:cursor-pointer'>Free ship đơn không giới hạn</div>
            <div className='hover:opacity-90 hover:cursor-pointer'>Thông báo</div>
            <div className='hover:opacity-90 hover:cursor-pointer'>Hỗ trợ</div>
            {auth.isLoggedIn ? null : (
              <Fragment>
                <Link className='hover:opacity-90 hover:cursor-pointer' to='/signup'>
                  Đăng ký
                </Link>
                <Link className='hover:opacity-90 hover:cursor-pointer' to='/login'>
                  Đăng nhập
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className='container h-18 mx-auto flex items-center gap-56 justify-between '>
        <Link className='flex gap-3 items-center' to='/'>
          <img className='w-8 h-8' src={logo} alt='logo' />
          <p className='text-lg text-neutral-0 font-semibold'>SOPY</p>
        </Link>
        <div className='flex-1'>
          <SearchBar />
          <div className='flex gap-3 mt-1'>
            <div className='text-xs text-neutral-300 hover:text-neutral-400 hover:cursor-pointer transition'>
              Iphone 11
            </div>
            <div className='text-xs text-neutral-300 hover:text-neutral-400 hover:cursor-pointer transition'>
              Điện thoại 1k
            </div>
            <div className='text-xs text-neutral-300 hover:text-neutral-400 hover:cursor-pointer transition'>
              Nón bảo hiểm
            </div>
            <div className='text-xs text-neutral-300 hover:text-neutral-400 hover:cursor-pointer transition'>
              Áo sơ mi nam
            </div>
            <div className='text-xs text-neutral-300 hover:text-neutral-400 hover:cursor-pointer transition'>
              Laptop cũ
            </div>
          </div>
        </div>
        {auth.isLoggedIn ? (
          <div className='flex gap-1'>
            <Notification />
            <Cart />
            <AvatarDropdown />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header
