import { GoogleOAuthProvider } from '@react-oauth/google'
import '../styles/global.scss'
import '../styles/theme.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>mypass</title>
      </Head>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </>
  )
}

export default App;