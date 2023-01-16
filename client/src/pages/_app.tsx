import { GoogleOAuthProvider } from '@react-oauth/google'
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
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </>
  )
}

export default App;