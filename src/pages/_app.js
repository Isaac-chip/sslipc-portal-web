import '@/styles/globals.css'
import '@/styles/tools.scss'
import { divide } from 'lodash'
import Header from './components/common/Header/index'

export default function App({ Component, pageProps }) {
  return (
    <div className='overflow-x-hidden'>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  )

}
