import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from '@/components/common'

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className='m-10'>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout