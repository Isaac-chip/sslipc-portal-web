import { useEffect } from 'react'
import '@/styles/globals.css'
import '@/styles/tools.scss'
import { divide } from 'lodash'
import Header from './components/common/Header/index'
import Footer from './components/common/Footer'

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import('@themesberg/flowbite')
  // }, [])
  return (
    <div className='overflow-x-hidden pb-60 h-screen'>
      <Header></Header>
      <Component {...pageProps} />
      <Footer className=""></Footer>
    </div>
  )

}
