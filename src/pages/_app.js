import '@/styles/globals.css'
import '@/styles/tools.scss'
import { divide } from 'lodash'
import Header from './components/common/Header/index'
import Footer from './components/common/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div className='overflow-x-hidden'>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )

}
