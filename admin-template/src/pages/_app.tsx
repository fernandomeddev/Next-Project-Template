import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '@/data/context/AppContext'
import { AuthProvider } from '@/data/context/AuthContext'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SaaS</title>
      </Head>
        <AuthProvider>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </AuthProvider>'
    </> 
  )
}
