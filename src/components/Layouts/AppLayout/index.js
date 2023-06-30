import Header from '../components/Header'
import FooterWithLogo from '../components/Footer'

function AppLayout({ children }) {
  return (
    <div className='flex-col flex'>
      <Header />
      <div className='pt-24 min-h-screen bg-page-bg'>{children}</div>
      <FooterWithLogo />
    </div>
  )
}

export default AppLayout
