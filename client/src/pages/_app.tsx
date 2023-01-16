import '../styles/global.scss'
import '../styles/theme.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>mypass</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;