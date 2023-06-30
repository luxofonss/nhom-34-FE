'use client'

import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/logo.png'
import notice from '../../../../assets/images/notice.png'
import register from '../../../../assets/images/register.png'

function FooterWithLogo() {
  return (
    <Footer container>
      <div className='w-full text-center'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <Link className='flex gap-3 items-center' to='/'>
            <img className='w-8 h-8' src={logo} alt='logo' />
            <p className='text-lg text-neutral-0 font-semibold text-orange-500'>SOPY</p>
          </Link>
          <div className='flex'>
            <Link className='flex gap-3 items-center' to='/'>
              <img className='h-20' src={notice} alt='notice'></img>
            </Link>
            <Link className='flex gap-3 items-center' to='/'>
              <img className='h-20' src={register} alt='register'></img>
            </Link>
          </div>
          <div className='flex gap-3 mt-1'>
            <Footer.LinkGroup>
              <Footer.Link href='#'>About</Footer.Link>
              <Footer.Link href='#'>Privacy Policy</Footer.Link>
              <Footer.Link href='#'>Licensing</Footer.Link>
              <Footer.Link href='#'>Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright by='SOPY' href='#' year={2023} />
      </div>
    </Footer>
  )
}

export default FooterWithLogo
