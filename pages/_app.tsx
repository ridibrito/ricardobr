import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Seo from '../components/Seo'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Component {...pageProps} />
    <Seo />
    </>
  )
  
}

export default MyApp
